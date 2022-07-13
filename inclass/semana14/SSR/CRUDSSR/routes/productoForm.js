const express = require('express');
const router = express.Router();
const axios = require('axios');

const httpsAxios = axios.create({
    baseURL: 'http://localhost:2400/v2/sextob/api/'
});

router.post('/producto/operar',(req, res, next) => {
    if (req.body._id=="") {
        httpsAxios.post('productos',{
            nombre: req.body.nombre,
            precio: req.body.precio,
            costo: req.body.costo,
            minimo: req.body.minimo,
            stock: req.body.stock,
        }).then(response => {
            res.redirect('/')
        })
    } else {
        httpsAxios.put(`producto/${req.body._id}`,{
            nombre: req.body.nombre,
            precio: req.body.precio,
            costo: req.body.costo,
            minimo: req.body.minimo,
            stock: req.body.stock,
        }).then(response => {
            res.redirect('/')
        })
    }
})
module.exports =router;