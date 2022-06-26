const express = require('express');
const app = express();

const respuesta={
    data:[],
    arquitectura:'Microservicio',
    descripcion:'Cliente MicroService'
}
app.get('/api/v2/clientes', (req, res) => {
    respuesta.data = [];
    respuesta.data.push('paco');
    console.log('Microservicio clientes');
    return res.send(respuesta);
});
module.exports = app;