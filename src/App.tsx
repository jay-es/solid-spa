import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { Link, RouteDefinition, useRoutes } from "solid-app-router";

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

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <>
      <h1 class="site-title">
        <Link href="/">Awesome Site</Link>
      </h1>
      <Routes />
    </>
  );
};

export default App;
