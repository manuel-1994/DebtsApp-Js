import { mainPage } from "../main-page/main-page"
import { secDebts, secHome, secLogin } from "../pages"
export const router = (route, subRoute) =>{
    if (route || route=== ''){
        switch (route) {
            case (location.hash && '/'):
                return secLogin()
            default:
                mainPage()
                return router(null, route)
        }
    }else{
        switch(subRoute){
            case '#/home':
                return secHome()
            case '#/debts':
                return secDebts()
            default:
                return secLogin()
        }
    }
}