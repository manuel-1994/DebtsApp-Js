import view from "./debtors.html"
import './debtors.css'
import { listDebtors} from "../../components"

const createHtml = () =>{
    const main = document.querySelector('.main-content')
    const div = document.createElement('div')
    div.innerHTML= view
    main.append(div.firstElementChild)
}

export const secDebtors = () => {
    createHtml()
    listDebtors()
}