import{Request, Response} from 'express'
import {Citas, Taller, Usuario} from '../models'

const crearCita = async(req:Request,res:Response)=>{
    const {...dato} = req.body;
    const cita = new Citas(dato);
    const nuevacita= await cita.save();
    res.status(201).json(nuevacita);

}
const elminaCita = async(req:Request,res:Response)=>{
    const {id} = req.params;
     //retorna el json de la cita en la qie esta el usuario.

    const citaModificada= await Citas.findByIdAndUpdate(id,{eliminado:true},{new:true});
    res.json(citaModificada);
    
    
}


export{
    crearCita,
    elminaCita,
}
