import view from "./main-page.html";
import "./main-page.css";
import { menu, sidebar } from "../components";
import { router } from "../router/index.routes";

const body = document.body;

const createHtml = () => {
  body.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = view;
  body.insertAdjacentElement("afterbegin", div.firstElementChild);
};

const delSec = () => {
  const main = document.querySelector(".main-content");
  main.lastChild.remove()
};

export const mainPage = () => {
  createHtml();
  menu();
  sidebar()
  window.subRoute = (route) => {
    delSec();
    router(null, route);
  };
};
