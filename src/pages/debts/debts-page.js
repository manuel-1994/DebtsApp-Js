import './debts.css'
import view from './debts.html'
import {listDebts, sidebar} from '../../components'



const createHtml = () =>{
    const main = document.querySelector('.main-content')
    const div = document.createElement('div')
    div.innerHTML= view
    const divTable = div.querySelector('.table-container')
    divTable.append(listDebts())
    main.append(div.firstElementChild)
}

export const secDebts = () => {
    sidebar('Deudas pendientes')
    createHtml()
}