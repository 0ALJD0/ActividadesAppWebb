const express= require('express');
const {pregunt1, insrperson,obtpersona}= require('../controllers/index');
const validar=require('../middlewares/index');
const route=express.Router();
//aqui he definido las rutas y he colocado los respectivos controladores uwu
//para el metodo post le he agregado

//pregunta 1:
/* 
creación de la ruta "/prueba"
*/
route.get('/prueba',pregunt1);

//pregunta 2:
/* 
creación de las rutas con metodos GET y POST
*/
route.get('/ver',obtpersona);
route.post('/insert',validar,insrperson);
module.exports=route;