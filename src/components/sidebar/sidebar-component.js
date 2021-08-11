import view from "./sidebar.html";
import "./sidebar.css";

const createHtml = () => {
  const main = document.querySelector(".main-content");
  const div = document.createElement("div");
  div.innerHTML = view;
  main.insertAdjacentElement("afterbegin", div.firstElementChild);
};

const events = () => {
  const btn = document.querySelector(".navbar-btn");
  const menu = document.querySelector(".menu");
  btn.addEventListener("click", (e) => {
    menu.classList.toggle("collapsed");
    document.querySelector(".main-content").classList.toggle("collapsed");
  });
};

export const sidebar = () => {
  createHtml();
  events();
};
