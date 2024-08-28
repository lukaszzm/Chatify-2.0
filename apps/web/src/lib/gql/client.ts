import { createClient as createWSClient } from "graphql-ws";
import { Client, fetchExchange, subscriptionExchange } from "urql";

import { getAccessToken } from "@/features/auth";
import { auth } from "@/lib/gql/auth-exchange";
import { cache } from "@/lib/gql/cache-exchange";

const gqlServerUrl = import.meta.env.VITE_GRAPHQL_URL;
const gqlWsServerUrl = import.meta.env.VITE_GRAPHQL_WS_URL;

const wsClient = createWSClient({
  url: gqlWsServerUrl,
  connectionParams: () => {
    const accessToken = getAccessToken();
    return {
      authorization: `Bearer ${accessToken}`,
    };
  },
});

const client = new Client({
  url: gqlServerUrl,
  fetchOptions: {
    headers: {
      "Apollo-Require-Preflight": "true",
    },
  },
  exchanges: [
    cache,
    auth,
    fetchExchange,
    subscriptionExchange({
      forwardSubscription: (request) => {
        const input = { ...request, query: request.query || "" };

        return {
          subscribe: (sink) => {
            const unsubscribe = wsClient.subscribe(input, sink);
            return { unsubscribe };
          },
        };
      },
    }),
  ],
});

export { client };
