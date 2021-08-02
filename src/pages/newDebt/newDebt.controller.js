import './newDebt.css'
import newDebt from './newDebt.html'
import { Debts} from '../../classes'
import {debtsList} from '../../'
import { listUserDebts } from '../../components'


export let id = ''
export const sectionNewDebt = () =>{
    const div = document.createElement('div')
    div.innerHTML = newDebt
    const txtInput = div.querySelectorAll('input')
    const form = div.querySelector('form')

    form.addEventListener('submit', e=>{
        e.preventDefault()
        const newDebt = new Debts(txtInput[0].value,
                                  txtInput[1].value,
                                  txtInput[2].value)
        
        debtsList.newDebt(newDebt)
        id = txtInput[0].value
        form.reset()
    })

    
    return div.firstElementChild
}

