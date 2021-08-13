import view from "./menu.html";
import './menu.css'


const container = document.querySelector('.app')
const createHtml = () => {
  const div = document.createElement("div");
  div.innerHTML = view;

  return container.insertAdjacentElement('afterbegin', div.firstElementChild)
};

const events = () =>{
}

export const menu = () => {
  createHtml()
}