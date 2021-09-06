import type { Component } from "solid-js";
import { Link, useRoutes } from "solid-app-router";
import { routes } from "./routes";

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
