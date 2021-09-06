import type { RouteDefinition } from "solid-app-router";
import { lazy } from "solid-js";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("./pages")),
  },
  {
    path: "/albums",
    component: lazy(() => import("./pages/albums")),
  },
  {
    path: "/albums/:albumId",
    component: lazy(() => import("./pages/albums/[albumId]")),
  },
  {
    path: "/posts",
    component: lazy(() => import("./pages/posts")),
  },
  {
    path: "/posts/:postId",
    component: lazy(() => import("./pages/posts/[postId]")),
  },
  {
    path: "/todos",
    component: lazy(() => import("./pages/todos")),
  },
  {
    path: "/todos/:todoId",
    component: lazy(() => import("./pages/todos/[todoId]")),
  },
  {
    path: "/users/:userId",
    component: lazy(() => import("./pages/users/[userId]")),
  },
  {
    path: "/users/:userId/albums",
    component: lazy(() => import("./pages/users/albums")),
  },
  {
    path: "/users/:userId/posts",
    component: lazy(() => import("./pages/users/posts")),
  },
  {
    path: "/users/:userId/todos",
    component: lazy(() => import("./pages/users/todos")),
  },
  {
    path: "/*",
    element: <p>not found.</p>,
  },
];
