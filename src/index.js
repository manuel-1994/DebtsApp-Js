import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles.css";
import  {router} from './router/index.routes.js'
import { DebtsList  } from "./classes";





export const debtsList = new DebtsList()


window.init=()=>{
    router(window.location.hash)
    window.route=(route)=>{
        router(route)
    }
}








