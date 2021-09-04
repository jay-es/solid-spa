import { Router } from "solid-app-router";
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

const root = document.getElementById("root");

if (!root) throw new Error("no root");

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  root
);
