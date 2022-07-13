var express = require('express');
var router = express.Router();
const axios = require('axios');

const httpsAxios = axios.create({
  baseURL: 'http://localhost:2400/v2/sextob/api/'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  httpsAxios.get(`productos/hola`).then(respuesta=>{
    console.log(respuesta.data.productos);
    res.render('index', { productos: respuesta.data.productos });
  })
});
//las rutas son par los botones, serán get para que funcione con enlaces en los botones
router.get('/producto/nuevo', (req, res, next) => {
  res.render('productoForm',{prodcuto:response.data});
});
router.get('/producto/modificar/:id',(req, res, next) => {
  httpsAxios.get(`productos/${req.params.id}`).then((response) => {
    res.render('productoForm',{})
    
  })
});
router.get('/producto/eliminar/:id', (req, res, next) => {
  httpsAxios.delete(`productos/${req.params.id}`).then((response) => {
    res.redirect('/');

  })
});

module.exports = router;
//para visualizar los cambios, si son cambios en la vista, solo guarda y se actualizará solo
//y para visuazlizar  los cambios hechos en las rutas, deberás además de guardar, 
//reiniciar la aplicación
