import { Router } from "express"
import { Vtalleres } from "../controllers"



const {verTalleres}= Vtalleres


const router= Router()

router.get('/talleres', verTalleres);
export{router};