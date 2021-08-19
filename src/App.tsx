import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { RouteDefinition, useRoutes } from "solid-app-router";

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("./pages/Index")),
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
