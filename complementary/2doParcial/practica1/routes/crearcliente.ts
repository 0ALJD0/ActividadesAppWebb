import { Router } from 'express';
import { check } from 'express-validator';
import { Ccliente } from "../controllers";
import validaciones  from '../middleware';

const { 
    CrearCliente,
   
}= Ccliente;
const {validarCampos}= validaciones
const router = Router();

router.post('/ncliente', CrearCliente, validarCampos);

export{router};