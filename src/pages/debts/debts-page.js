import './debts.css'
import view from './debts.html'
import {listDebts, sidebar} from '../../components'


const body = document.body
const createHtml = () =>{
    const main = document.createElement('main')
    main.innerHTML= view
    const divTable = main.querySelector('.table-container')
    divTable.append(listDebts())

    return body.append(main)
}

export const sectionDebts = () => {
    body.innerHTML= ''
    sidebar()
    createHtml()
}