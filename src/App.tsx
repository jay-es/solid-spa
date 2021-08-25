import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { RouteDefinition, useRoutes } from "solid-app-router";

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("./pages/Index")),
  },
  {
    path: "/albums/:albumId",
    component: lazy(() => import("./pages/Album")),
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
    component: lazy(() => import("./pages/User")),
  },
  {
    path: "/users/:userId/albums",
    component: lazy(() => import("./pages/UserAlbums")),
  },
  {
    path: "/users/:userId/posts",
    component: lazy(() => import("./pages/UserPosts")),
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
