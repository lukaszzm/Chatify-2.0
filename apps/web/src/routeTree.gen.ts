/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as DashboardImport } from "./routes/_dashboard";
import { Route as AuthImport } from "./routes/_auth";
import { Route as IndexImport } from "./routes/index";
import { Route as DashboardSettingsImport } from "./routes/_dashboard.settings";
import { Route as DashboardNotesImport } from "./routes/_dashboard.notes";
import { Route as DashboardChatImport } from "./routes/_dashboard.chat";
import { Route as AuthSignUpImport } from "./routes/_auth.sign-up";
import { Route as AuthSignInImport } from "./routes/_auth.sign-in";

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  id: "/_dashboard",
  getParentRoute: () => rootRoute,
} as any);

const AuthRoute = AuthImport.update({
  id: "/_auth",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const DashboardSettingsRoute = DashboardSettingsImport.update({
  path: "/settings",
  getParentRoute: () => DashboardRoute,
} as any);

const DashboardNotesRoute = DashboardNotesImport.update({
  path: "/notes",
  getParentRoute: () => DashboardRoute,
} as any);

const DashboardChatRoute = DashboardChatImport.update({
  path: "/chat",
  getParentRoute: () => DashboardRoute,
} as any);

const AuthSignUpRoute = AuthSignUpImport.update({
  path: "/sign-up",
  getParentRoute: () => AuthRoute,
} as any);

const AuthSignInRoute = AuthSignInImport.update({
  path: "/sign-in",
  getParentRoute: () => AuthRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/_auth": {
      id: "/_auth";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof AuthImport;
      parentRoute: typeof rootRoute;
    };
    "/_dashboard": {
      id: "/_dashboard";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof DashboardImport;
      parentRoute: typeof rootRoute;
    };
    "/_auth/sign-in": {
      id: "/_auth/sign-in";
      path: "/sign-in";
      fullPath: "/sign-in";
      preLoaderRoute: typeof AuthSignInImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/sign-up": {
      id: "/_auth/sign-up";
      path: "/sign-up";
      fullPath: "/sign-up";
      preLoaderRoute: typeof AuthSignUpImport;
      parentRoute: typeof AuthImport;
    };
    "/_dashboard/chat": {
      id: "/_dashboard/chat";
      path: "/chat";
      fullPath: "/chat";
      preLoaderRoute: typeof DashboardChatImport;
      parentRoute: typeof DashboardImport;
    };
    "/_dashboard/notes": {
      id: "/_dashboard/notes";
      path: "/notes";
      fullPath: "/notes";
      preLoaderRoute: typeof DashboardNotesImport;
      parentRoute: typeof DashboardImport;
    };
    "/_dashboard/settings": {
      id: "/_dashboard/settings";
      path: "/settings";
      fullPath: "/settings";
      preLoaderRoute: typeof DashboardSettingsImport;
      parentRoute: typeof DashboardImport;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AuthRoute: AuthRoute.addChildren({ AuthSignInRoute, AuthSignUpRoute }),
  DashboardRoute: DashboardRoute.addChildren({
    DashboardChatRoute,
    DashboardNotesRoute,
    DashboardSettingsRoute,
  }),
});

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth",
        "/_dashboard"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/sign-in",
        "/_auth/sign-up"
      ]
    },
    "/_dashboard": {
      "filePath": "_dashboard.tsx",
      "children": [
        "/_dashboard/chat",
        "/_dashboard/notes",
        "/_dashboard/settings"
      ]
    },
    "/_auth/sign-in": {
      "filePath": "_auth.sign-in.tsx",
      "parent": "/_auth"
    },
    "/_auth/sign-up": {
      "filePath": "_auth.sign-up.tsx",
      "parent": "/_auth"
    },
    "/_dashboard/chat": {
      "filePath": "_dashboard.chat.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/notes": {
      "filePath": "_dashboard.notes.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/settings": {
      "filePath": "_dashboard.settings.tsx",
      "parent": "/_dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
