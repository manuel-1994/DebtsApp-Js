import view from "./main-page.html"
import './main-page.css'
import { header, sidebar } from "../components"
import {secHome} from "../pages"
import { router } from "../router/index.routes"

const body = document.body

const createHtml = () => {
    const div = document.createElement("div");
    div.innerHTML = view;
    body.insertAdjacentElement('afterbegin', div.firstElementChild)
}

const delSec = ()=>{
    const main = document.querySelector('.main-content')
    main.lastElementChild.remove()
}

export const mainPage= () =>{
    createHtml()
    header()
    sidebar()
    secHome()
    window.subRoute=(route)=>{
        delSec()
        router(null ,route)
    }
}