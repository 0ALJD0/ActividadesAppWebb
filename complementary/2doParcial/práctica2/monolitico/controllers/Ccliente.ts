import {Usuario} from '../models'
import{Request, Response} from 'express'



const CrearCliente = async (req: Request ,res: Response )=>{
    const {...dato} =  req.body;

    const clienteExiste = await Usuario.findOne({ ci:dato.ci });
    /* if (clienteExiste)
    {
        res.status(400).json({
            message:
            `Ya existe un cliente con esa cedula ${clienteExiste.ci}`
        })
    } */
    const cliente = new Usuario(dato);
    const clientenuevo =  await cliente.save();
    res.status(201).json(clientenuevo);//envialo por el cuerpo con axios
    //lo guardas con una variable y luego lo envías
   
}

export {
    CrearCliente 
}