import view from "./menu.html";
import './menu.css'


const createHtml = () => {
  const container = document.querySelector('.main-container')
  const div = document.createElement("div");
  div.innerHTML = view;

  return container.insertAdjacentElement('afterbegin', div.firstElementChild)
};

const events = () =>{

}

export const menu = () => {
  createHtml()
}