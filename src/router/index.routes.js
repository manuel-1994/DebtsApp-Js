import { secDebts, secHome } from "../pages"


export const router = (route, subRoute) =>{
    if (route){
        switch (route) {
            case (location.hash && '#/'):
                return 
            default:
                return
        }
    }else{
        switch(subRoute){
            case '#/home':
                return secHome()
            case '#/debts':
                return secDebts()
        }
    }
}