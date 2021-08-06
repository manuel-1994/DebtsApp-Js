import "./login.css";
import view from "./login.html";

const body = document.body;

const createHtml = () => {
  body.innerHTML=''
  const div = document.createElement("div")
  div.className= 'main-container'
  div.innerHTML = view;
  return body.insertAdjacentElement("afterbegin", div);
};

export const secLogin = () =>{
  createHtml()
}