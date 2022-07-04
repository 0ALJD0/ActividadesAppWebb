import { Router } from "express"
import { check } from "express-validator"
import { Cvehiculo } from "../controllers"
import validaciones from '../middleware'


const {CrearVehiculo}= Cvehiculo

const {validarCampos}= validaciones

const router= Router()

router.post('/nvehiculo',check('placa', 'Placa obligatoria'),validarCampos, CrearVehiculo);


export{router}