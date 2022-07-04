import { Router } from "express"
import { VerCitaCliente } from "../controllers"



const {verCitasCliente}= VerCitaCliente


const router= Router()

router.get('/citas', verCitasCliente);
export{router};

