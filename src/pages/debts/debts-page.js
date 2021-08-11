import './debts.css'
import view from './debts.html'
import {listDebts} from '../../components'



const createHtml = () =>{
    const main = document.querySelector('.main-content')
    const div = document.createElement('div')
    div.innerHTML= view
    main.append(div.firstElementChild)
}

export const secDebts = () => {
    createHtml()
    listDebts()
}