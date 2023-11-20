import { initRouter,Route } from "./core/BrowserRouter";

import Component from "./core/Component";
import "./scss/total.scss";
import "./scss/main.scss";

import Main from "./pages/Main";

const routes: Route[] = [
  { path: "/", page: Main as typeof Component },
  // { path: "/sub", page: Sub as typeof Component },
];

const $app = document.querySelector("#app") as HTMLElement;

initRouter({ $app, routes });