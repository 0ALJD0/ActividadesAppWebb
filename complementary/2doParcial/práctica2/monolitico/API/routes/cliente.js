"use strict";
const express_1 = require("express");
const controllers_1 = require("../controllers");
const { CrearCliente,
//CrearVehiculo,
//crearCita,
//verCitasCliente,
//elminaCita,
//verTalleres,
// falta codigo de la ruta cliente.ts
//si el cliente ya existe (por cedula) no se guarda solo se agrega, por que la ci es unique
 } = controllers_1.Ccliente;
const router = (0, express_1.Router)();
//router.get('/talleres', verTalleres);
//router.get('/vcitas',verCitasCliente);
//router.put('/dcita/:id',elminaCita);
router.post('/ncliente', CrearCliente);
module.exports = router;
