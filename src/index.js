import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles.css";
import  {router} from './router/index.routes.js'
import { DebtsList  } from "./classes";
import { mainPage } from './main-page/main-page';




export const debtsList = new DebtsList()


window.init=()=>{
    mainPage()
    window.route=(route)=>{
        router(route)
    }
}








