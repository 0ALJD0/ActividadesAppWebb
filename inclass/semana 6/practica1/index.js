//Realizando CRUD 
const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const app = express();
const route = express.Router();
const PUERTO = 3000
let comidas = [];

app.use(cors()).use(express.json());

route.get('/',(req,res)=>{
    res.status(200).send(comidas);
})

route.post('/',(req,res)=>{
    
    const{body}=req;
    if(comidas.filter(c=>c.code===body.code).length>0)
    {
        return res.status(400).send({
            message:`SE EQUIVOCO`,
            response: body
        })
    }
    comidas.push(body);
    res.status(201).send({
        message:`EL dato ha sido insertado tio`,
        response: body
    })
})

route.put('/', (req,res)=>{
    const{code, description, name}= req.body;
    if (comidas.filter(c=>c.code===code).length==0)
    {
        return res.status(400).send({
            message:`No he encontrado nada`  
        })
    }
    let comida=comidas.filter(c=>c.code==code)[0];
    comida.description=description;
    comida.name=name;
    res.status(200).send({
        message: `Dato modificado`,
        response: comida
    })
})
route.delete('/:code',(req, res)=>{
    const {code} = req.params
    comidas = comidas.filter(c=>c.code !== code);
    res.status(200).send({
        message:`Dato eliminado`
    })
})
route.get('/:code', (req, res)=>{
    const {code} = req.params;
    comida = comidas.filter(c=>c.code==code);
    if (comida.length>0)
    {
        res.status(200).send({
            message:`Se ha encontrado el dato`,
            response:comida[0]
        })
    }
    else
    {
        res.status(400).send({
            message:`ESTA COMIDA NO EXISTE`
        })
    }

})

app.use('/comida', route);

app.listen(PUERTO, ()=>{
    console.log(`Servidor escuchando a la puerta http://localhost:${PUERTO}`)
})