const {Router} = require('express');
const {check}= require('express-validator');
const {validarCampos}=require('../middlewares');

const {
    ObtenerProducto, 
    ObtenerProductos,
    actualizarProducto,
    borrarProducto,
    crearProducto

} = require('../controllers').Producto;

const router = Router();
router.get('/', ObtenerProductos)
router.get('/:id',ObtenerProducto)
router.post('/', [check('nombre', 'El nombre es obligatorio').not().isEmpty()],validarCampos,crearProducto);
router.put('/:id',[check('id','El id no es válido').isMongoId], actualizarProducto);
router.delete('/:id',[check('id','El id no es válido').isMongoId],borrarProducto)

module.exports=router;