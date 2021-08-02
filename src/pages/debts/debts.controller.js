import './debts.css'
import view from './debts.html'
import {listDebts} from '../../components'
import { header } from '../../components/header/header-component'

export const sectionDebts = () =>{
    
    const div = document.createElement('div')
    div.innerHTML= view
    const divTable = div.querySelector('.table-container')

    divTable.append(listDebts())

    

    return div.firstElementChild
}