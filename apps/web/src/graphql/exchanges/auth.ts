import { authExchange } from "@urql/exchange-auth";
import { Kind } from "graphql";

import {
  getAccessToken,
  getRefreshToken,
  saveAuthTokens,
  clearAuthTokens,
} from "@/features/auth/utils/tokens";
import { REFRESH_TOKEN_MUTATION } from "@/graphql/mutations/refresh-token";

export const auth = authExchange(async (utilities) => {
  let accessToken = getAccessToken();
  let refreshToken = getRefreshToken();

  return {
    addAuthToOperation(operation) {
      if (!accessToken) {
        return operation;
      }

      return utilities.appendHeaders(operation, {
        Authorization: `Bearer ${accessToken}`,
      });
    },
    didAuthError(error) {
      const unsecurePaths = ["signIn", "signUp"];

      return error.graphQLErrors.some((e) => {
        const isPathUnsecure =
          e.path?.some((path) => unsecurePaths.includes(String(path))) ?? true;
        const isUnauthenticated = e.extensions?.code === "UNAUTHENTICATED";
        return !isPathUnsecure && isUnauthenticated;
      });
    },
    willAuthError(operation) {
      accessToken = getAccessToken();
      refreshToken = getRefreshToken();

      if (!accessToken) {
        return (
          operation.kind !== "mutation" ||
          !operation.query.definitions.some((definition) => {
            return (
              definition.kind === Kind.OPERATION_DEFINITION &&
              definition.selectionSet.selections.some((node) => {
                const allowedValues = ["signIn", "signUp"];
                return (
                  node.kind === Kind.FIELD && allowedValues.includes(node.name.value)
                );
              })
            );
          })
        );
      }

      return false;
    },
    async refreshAuth() {
      if (refreshToken) {
        const result = await utilities.mutate(REFRESH_TOKEN_MUTATION, {
          refreshToken,
        });

        if (result.data?.refresh) {
          accessToken = result.data.refresh.accessToken;
          refreshToken = result.data.refresh.refreshToken;
          saveAuthTokens({ accessToken, refreshToken });
          return;
        }
      }

      clearAuthTokens();
      window.location.reload();
    },
  };
});
