import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { RouteDefinition, useRoutes } from "solid-app-router";

const routes: RouteDefinition[] = [
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
];

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <>
      <h1>Awesome Site</h1>
      <Routes />
    </>
  );
};

export default App;
