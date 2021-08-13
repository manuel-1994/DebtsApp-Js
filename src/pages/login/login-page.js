import "./login.css";
import view from "./login.html";

const app = document.querySelector('.app')

const createHtml = () => {
  const div = document.createElement("div")
  div.innerHTML = view;
  app.insertAdjacentElement("afterbegin", div.firstElementChild);
};

export const secLogin = () =>{
  createHtml()
}