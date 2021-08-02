import view from "./header.html";

export const header = (title) =>{
    const div = document.createElement('div')
    div.innerHTML= view
    const headerHtml = div.querySelector('header')
    headerHtml.innerHTML= `      
    <h2>${title}</h2>
    <img class="header-img" src="./assets/webpack-logo.png" alt="">`

    return div.firstElementChild
}