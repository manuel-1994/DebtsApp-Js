

export class Debts {

    constructor(name, desc, value){
        this.name = name
        
        this.debts = {
            desc: desc,
            value: parseInt(value),
            id : new Date().getTime()
        }

    }
}