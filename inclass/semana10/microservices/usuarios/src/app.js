const express = require('express');
const app = express();

const respuesta={
    data:[],
    arquitectura:'Microservicio',
    descripcion:'Usuario MicroService'
}
app.get('/api/v2/usuario', (req, res) => {
    respuesta.data = [];
    respuesta.data.push('admin');
    console.log('Microservicio usuario');
    return res.send(respuesta);
});
module.exports = app;