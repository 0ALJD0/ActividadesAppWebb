import {Router} from 'express';
import {check} from 'express-validator';
import {Product} from '../controllers'
import funciones from '../middlewares';

//corrige esto
const rutas = Router();
rutas.get('/',funciones.validarCampos, Product.obtenerProductos);
rutas.get('/:id',Product.obtenerProducto);
rutas.post('/', Product.crearProducto);
export{
    rutas
}