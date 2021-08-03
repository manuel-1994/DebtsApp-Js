import "./login.css";
import view from "./login.html";

const body = document.body;

const createHtml = () => {
  const main = document.createElement("main");
  main.innerHTML = view;
  return body.insertAdjacentElement("afterbegin", main);
};

export const sectionLogin = () =>{
  body.innerHTML=''
  createHtml()
}