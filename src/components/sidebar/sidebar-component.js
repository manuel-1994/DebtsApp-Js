import view from "./sidebar.html"
import './sidebar.css'

const createHtml = () => {
  const main = document.querySelector('.main-content')
  const div = document.createElement("div");
  div.innerHTML = view
  main.insertAdjacentElement('afterbegin',div.firstElementChild)
};

export const sidebar = () => {
  createHtml()
}