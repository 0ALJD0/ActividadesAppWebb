import {Citas, Taller} from '../models'
import{Request, Response} from 'express'
const verCitasCliente = async (req:Request,res:Response)=>{
    const {...dato}= req.body;//el nombre del taller
    const existeTaller= await Taller.find({NombreTaller:dato.NombreTaller});

    if (existeTaller.length>0) {

            const citas = await Citas.find({idtaller:existeTaller[0]._id,
            estado:false,eliminado:false
            }).populate('idcliente','Nombre').populate('idtaller', 'NombreTaller')
            .populate('idvehiculo', 'placa');
            //console.log(citas);
            return res.json(citas);
    }
    res.status(400).json({message:`No se encontró el Taller con el nombre: ${dato.NombreTaller}`});
}
export {verCitasCliente}
