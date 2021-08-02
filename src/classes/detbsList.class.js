import { sectionUser } from "../pages";


export class DebtsList{
    
    constructor(){
        this.debts = {};
    }

    newDebt(debt){
        const {name, debts} = debt
        const {id, desc, value} = debts
        let total = 0
        
        this.debts[name] = {
            userDebts:{},
            total: total + value,
            name
        } 
        this.debts[name].userDebts[id] = {desc, value, id} 
    }


    newUserDebt(debt){

    }

    

    deleteUserDebt(){

    }
 

}