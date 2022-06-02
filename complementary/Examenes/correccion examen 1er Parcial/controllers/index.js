const {response} = require('express');
const personas=require('../persistence/index');
//controllers pregunta 1
/* const parametro=process.env.parametro || 'v1'; */
const parametro=process.env.parametro || 'v2';
const pregunt1=(req,res=response)=>{
    if (parametro==='v1') {
        res.status(200).send({
            message:`Ruta 1`
        })
    }
    if (parametro==='v2') {
        res.status(200).send({
            message:`Ruta 2`
        })
    }
};
//controllers pregunta 2
const obtpersona=(req,res=response)=>{
    res.status(200).send({
        datos:personas
    })
};
const insrperson=(req,res=response)=>{
    const {...dato}=req.body;
    const verif = personas.push(dato);
    if (verif) {
        res.status(200).send(dato);
    } else {
        res.status(400).send({
            error:"algo salio mal"
        })
    }
}
module.exports={
    pregunt1,insrperson,obtpersona
}