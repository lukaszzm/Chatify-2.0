/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardImport } from './routes/_dashboard'
import { Route as AuthImport } from './routes/_auth'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardSettingsImport } from './routes/_dashboard.settings'
import { Route as DashboardNotesImport } from './routes/_dashboard.notes'
import { Route as DashboardChatImport } from './routes/_dashboard.chat'
import { Route as AuthSignUpImport } from './routes/_auth.sign-up'
import { Route as AuthSignInImport } from './routes/_auth.sign-in'
import { Route as DashboardSettingsIndexImport } from './routes/_dashboard.settings.index'
import { Route as DashboardNotesIndexImport } from './routes/_dashboard.notes.index'
import { Route as DashboardChatIndexImport } from './routes/_dashboard.chat.index'
import { Route as DashboardSettingsProfileImport } from './routes/_dashboard.settings.profile'
import { Route as DashboardSettingsNotificationsImport } from './routes/_dashboard.settings.notifications'
import { Route as DashboardSettingsAppearanceImport } from './routes/_dashboard.settings.appearance'
import { Route as DashboardNotesNoteIdImport } from './routes/_dashboard.notes.$noteId'
import { Route as DashboardChatChatIdImport } from './routes/_dashboard.chat.$chatId'

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  id: '/_dashboard',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardSettingsRoute = DashboardSettingsImport.update({
  path: '/settings',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardNotesRoute = DashboardNotesImport.update({
  path: '/notes',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardChatRoute = DashboardChatImport.update({
  path: '/chat',
  getParentRoute: () => DashboardRoute,
} as any)

const AuthSignUpRoute = AuthSignUpImport.update({
  path: '/sign-up',
  getParentRoute: () => AuthRoute,
} as any)

const AuthSignInRoute = AuthSignInImport.update({
  path: '/sign-in',
  getParentRoute: () => AuthRoute,
} as any)

const DashboardSettingsIndexRoute = DashboardSettingsIndexImport.update({
  path: '/',
  getParentRoute: () => DashboardSettingsRoute,
} as any)

const DashboardNotesIndexRoute = DashboardNotesIndexImport.update({
  path: '/',
  getParentRoute: () => DashboardNotesRoute,
} as any)

const DashboardChatIndexRoute = DashboardChatIndexImport.update({
  path: '/',
  getParentRoute: () => DashboardChatRoute,
} as any)

const DashboardSettingsProfileRoute = DashboardSettingsProfileImport.update({
  path: '/profile',
  getParentRoute: () => DashboardSettingsRoute,
} as any)

const DashboardSettingsNotificationsRoute =
  DashboardSettingsNotificationsImport.update({
    path: '/notifications',
    getParentRoute: () => DashboardSettingsRoute,
  } as any)

const DashboardSettingsAppearanceRoute =
  DashboardSettingsAppearanceImport.update({
    path: '/appearance',
    getParentRoute: () => DashboardSettingsRoute,
  } as any)

const DashboardNotesNoteIdRoute = DashboardNotesNoteIdImport.update({
  path: '/$noteId',
  getParentRoute: () => DashboardNotesRoute,
} as any)

const DashboardChatChatIdRoute = DashboardChatChatIdImport.update({
  path: '/$chatId',
  getParentRoute: () => DashboardChatRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_dashboard': {
      id: '/_dashboard'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/_auth/sign-in': {
      id: '/_auth/sign-in'
      path: '/sign-in'
      fullPath: '/sign-in'
      preLoaderRoute: typeof AuthSignInImport
      parentRoute: typeof AuthImport
    }
    '/_auth/sign-up': {
      id: '/_auth/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof AuthSignUpImport
      parentRoute: typeof AuthImport
    }
    '/_dashboard/chat': {
      id: '/_dashboard/chat'
      path: '/chat'
      fullPath: '/chat'
      preLoaderRoute: typeof DashboardChatImport
      parentRoute: typeof DashboardImport
    }
    '/_dashboard/notes': {
      id: '/_dashboard/notes'
      path: '/notes'
      fullPath: '/notes'
      preLoaderRoute: typeof DashboardNotesImport
      parentRoute: typeof DashboardImport
    }
    '/_dashboard/settings': {
      id: '/_dashboard/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof DashboardSettingsImport
      parentRoute: typeof DashboardImport
    }
    '/_dashboard/chat/$chatId': {
      id: '/_dashboard/chat/$chatId'
      path: '/$chatId'
      fullPath: '/chat/$chatId'
      preLoaderRoute: typeof DashboardChatChatIdImport
      parentRoute: typeof DashboardChatImport
    }
    '/_dashboard/notes/$noteId': {
      id: '/_dashboard/notes/$noteId'
      path: '/$noteId'
      fullPath: '/notes/$noteId'
      preLoaderRoute: typeof DashboardNotesNoteIdImport
      parentRoute: typeof DashboardNotesImport
    }
    '/_dashboard/settings/appearance': {
      id: '/_dashboard/settings/appearance'
      path: '/appearance'
      fullPath: '/settings/appearance'
      preLoaderRoute: typeof DashboardSettingsAppearanceImport
      parentRoute: typeof DashboardSettingsImport
    }
    '/_dashboard/settings/notifications': {
      id: '/_dashboard/settings/notifications'
      path: '/notifications'
      fullPath: '/settings/notifications'
      preLoaderRoute: typeof DashboardSettingsNotificationsImport
      parentRoute: typeof DashboardSettingsImport
    }
    '/_dashboard/settings/profile': {
      id: '/_dashboard/settings/profile'
      path: '/profile'
      fullPath: '/settings/profile'
      preLoaderRoute: typeof DashboardSettingsProfileImport
      parentRoute: typeof DashboardSettingsImport
    }
    '/_dashboard/chat/': {
      id: '/_dashboard/chat/'
      path: '/'
      fullPath: '/chat/'
      preLoaderRoute: typeof DashboardChatIndexImport
      parentRoute: typeof DashboardChatImport
    }
    '/_dashboard/notes/': {
      id: '/_dashboard/notes/'
      path: '/'
      fullPath: '/notes/'
      preLoaderRoute: typeof DashboardNotesIndexImport
      parentRoute: typeof DashboardNotesImport
    }
    '/_dashboard/settings/': {
      id: '/_dashboard/settings/'
      path: '/'
      fullPath: '/settings/'
      preLoaderRoute: typeof DashboardSettingsIndexImport
      parentRoute: typeof DashboardSettingsImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AuthRoute: AuthRoute.addChildren({ AuthSignInRoute, AuthSignUpRoute }),
  DashboardRoute: DashboardRoute.addChildren({
    DashboardChatRoute: DashboardChatRoute.addChildren({
      DashboardChatChatIdRoute,
      DashboardChatIndexRoute,
    }),
    DashboardNotesRoute: DashboardNotesRoute.addChildren({
      DashboardNotesNoteIdRoute,
      DashboardNotesIndexRoute,
    }),
    DashboardSettingsRoute: DashboardSettingsRoute.addChildren({
      DashboardSettingsAppearanceRoute,
      DashboardSettingsNotificationsRoute,
      DashboardSettingsProfileRoute,
      DashboardSettingsIndexRoute,
    }),
  }),
})

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
      "parent": "/_dashboard",
      "children": [
        "/_dashboard/chat/$chatId",
        "/_dashboard/chat/"
      ]
    },
    "/_dashboard/notes": {
      "filePath": "_dashboard.notes.tsx",
      "parent": "/_dashboard",
      "children": [
        "/_dashboard/notes/$noteId",
        "/_dashboard/notes/"
      ]
    },
    "/_dashboard/settings": {
      "filePath": "_dashboard.settings.tsx",
      "parent": "/_dashboard",
      "children": [
        "/_dashboard/settings/appearance",
        "/_dashboard/settings/notifications",
        "/_dashboard/settings/profile",
        "/_dashboard/settings/"
      ]
    },
    "/_dashboard/chat/$chatId": {
      "filePath": "_dashboard.chat.$chatId.tsx",
      "parent": "/_dashboard/chat"
    },
    "/_dashboard/notes/$noteId": {
      "filePath": "_dashboard.notes.$noteId.tsx",
      "parent": "/_dashboard/notes"
    },
    "/_dashboard/settings/appearance": {
      "filePath": "_dashboard.settings.appearance.tsx",
      "parent": "/_dashboard/settings"
    },
    "/_dashboard/settings/notifications": {
      "filePath": "_dashboard.settings.notifications.tsx",
      "parent": "/_dashboard/settings"
    },
    "/_dashboard/settings/profile": {
      "filePath": "_dashboard.settings.profile.tsx",
      "parent": "/_dashboard/settings"
    },
    "/_dashboard/chat/": {
      "filePath": "_dashboard.chat.index.tsx",
      "parent": "/_dashboard/chat"
    },
    "/_dashboard/notes/": {
      "filePath": "_dashboard.notes.index.tsx",
      "parent": "/_dashboard/notes"
    },
    "/_dashboard/settings/": {
      "filePath": "_dashboard.settings.index.tsx",
      "parent": "/_dashboard/settings"
    }
  }
}
ROUTE_MANIFEST_END */
