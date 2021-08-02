import { header, sidebar } from "../components"
import { sectionHome, sectionNewDebt, sectionDebts, sectionUser } from "../pages";



/* html ref */
const $contentDef= document.querySelector('body')


export const router = (route) =>{
    $contentDef.innerHTML= `<main></main>`
    $contentDef.insertAdjacentElement('afterbegin', sidebar())
    const $content= document.querySelector('main')
    const $side = document.querySelector('.side')
    $content.innerHTML= ''
    switch (route) {
        case (location.hash && '#/'):
            $contentDef.removeChild($side)
            return $content.append(sectionHome())
        case '#/home':
            return $content.append(header('Inicio'))
        case '#/debts':
            return $content.append(header('Deudas pendientes'),sectionDebts())
        case '#/newDebts':
            return $content.append(header('Nueva deuda'),sectionNewDebt())
        default:
            $contentDef.remove($side)
            return $content.append(sectionHome())
    }
}