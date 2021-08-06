import './home.css'
import view from "./home.html"

const createHtml = () => {
    const main = document.querySelector('.main-content')
    const div = document.createElement("div");
    div.innerHTML = view;
    main.append(div.firstElementChild);
}

export const secHome = () => {
    createHtml()
}