
import { sectionLogin, sectionNewDebt, sectionDebts, sectionHome } from "../pages";

export const router = (route) =>{
    switch (route) {
        case (location.hash && '#/'):
            return sectionLogin()
        case '#/home':
            return sectionHome()
        case '#/debts':
            return sectionDebts()
        case '#/newDebts':
            return sectionNewDebt()
        default:
            return sectionLogin()
    }
}