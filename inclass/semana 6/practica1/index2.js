const express = require ('express');
const cors = require('cors');

const app = express();
const puerto = 2500

app.use(cors()).use(express.json());    

app.get('/prueba', (req, res, next)=>{
//se usaria un netx si no quiere que haga nada le siguiente 
    next();
}, (req, res, next)=>{
    res.status(200).send({mensaje:"Siguiente"});
})


app.use('/prueba', (req, res, next)=>{
    req.body.nombre = req.body.toUpperCase();//ediatamos un atributo del dato recibido
    next();
})
app.post('/prueba',(req, res, next)=>{
    res.status(201).send(req.body);
})

app.use('/prueba', (req, res, next)=>{
    console.log(`Despues del middleware`);
})
    app.listen(puerto, ()=>{
        console.log(`Servidor escuchando en el puerto ${puerto}`)
    })