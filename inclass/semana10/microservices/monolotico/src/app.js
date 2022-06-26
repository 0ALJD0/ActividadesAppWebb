const express = require('express');
const app = express();
//const router = router();
const respuesta={
    data:[],
    arquitectura:'Monolítico',
    descripción:'Acceso a todas las rutas en un solo en encrypoint'
}
app.use((req,res,next) => 
{ respuesta.data=[];
     next()
});
app.get('/api/v1/users',(req,res)=>{
    respuesta.data.push('admin','godness')
    return res.send(respuesta.data);
});
app.get('/api/v1/productos',(req,res)=>{
    respuesta.data.push('agua','leche','coca')
    return res.send(respuesta.data);
});
app.get('/api/v1/clientes',(req,res)=>{
    respuesta.data.push('marcelo','victim');
    return res.send(respuesta.data);
});
module.exports=app;