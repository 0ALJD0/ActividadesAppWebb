const express = require('express');
const app = express();

const respuesta={
    data:[],
    arquitectura:'Microservicio',
    descripcion:'Producto MicroService'
}
app.get('/api/v2/producto', (req, res) => {
    respuesta.data = [];
    respuesta.data.push('leche');
    console.log('Microservicio producto');
    return res.send(respuesta);
});
module.exports = app;