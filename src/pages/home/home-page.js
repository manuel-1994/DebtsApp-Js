import { sidebar } from '../../components';
import './home.css'
import view from "./home.html"

const body = document.body
const createHtml = () => {
    const main = document.createElement("main");
    main.innerHTML = view;
    return body.append(main);
}

export const sectionHome = () => {
    body.innerHTML= ''
    sidebar()
    createHtml()
}