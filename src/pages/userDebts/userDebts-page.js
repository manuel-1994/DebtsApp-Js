import { listUserDebts } from '../../components';
/* import { id } from '../newDebt/newDebt.controller'; */
import view from './userDebts.html';


export const sectionUser = () =>{
    const div = document.createElement('div')
    div.innerHTML= view 
    const divTable = div.querySelector('.table-container')

    divTable.append(listUserDebts(id))

    return div.firstElementChild
}