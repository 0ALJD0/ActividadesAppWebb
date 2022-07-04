import { Router } from "express";
import { ControllerCita } from "../controllers";


const Ccita = new ControllerCita();
const router = Router();

router.get('/vCitas', Ccita.getCitasCliente);

export{router}; 