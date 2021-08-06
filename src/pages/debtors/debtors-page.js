import view from "./debtors.html"
import './debtors.css'
import { sidebar } from "../../components"

const createHtml = () =>{
    const main = document.querySelector('.main-content')
    const div = document.createElement('div')
    div.innerHTML= view
    const divTable = div.querySelector('.table-container')
    divTable.append()
    main.append(div.firstElementChild)
}

export const secDebtors = () => {
    sidebar('Deudores pendientes')
    createHtml()
}