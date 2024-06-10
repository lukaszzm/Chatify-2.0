import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Provider } from "urql";

import { client } from "@/lib/gql";

export const Route = createRootRoute({
  component: () => (
    <Provider value={client}>
      <Outlet />
      <TanStackRouterDevtools />
    </Provider>
  ),
});
