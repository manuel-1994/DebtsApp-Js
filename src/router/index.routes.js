import { mainPage } from "../main-page/main-page"
import { secDebtors, secDebts, secHome, secLogin } from "../pages"
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
            case '#/inicio':
                return secHome()
            case '#/deudas':
                return secDebts()
            case '#/deudores':
                return secDebtors()
            default:
                return secLogin()
        }
    }
}