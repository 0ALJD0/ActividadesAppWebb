import {Router} from 'express';
import {check} from 'express-validator';
import {Product} from '../controllers'
import funciones from '../middlewares';
const {validacionCamps} = funciones
//corrige esto
const rutas = Router();
rutas.get('/',validacionCamps, Product.obtenerProductos);
rutas.get('/:id',Product.obtenerProducto);
rutas.post('/', Product.crearProducto);
