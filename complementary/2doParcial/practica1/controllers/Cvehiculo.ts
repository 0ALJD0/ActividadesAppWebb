import {Vehiculo} from '../models'
import { IModelsVehiculo} from '../interfaces'
import{Request, Response} from 'express'

const CrearVehiculo = async (req: Request,res: Response)=>{

    try {
        const {...dato} = req.body;
        const vehiculo = new Vehiculo(dato);
        const nuevovehiculo= await vehiculo.save();
        res.status(201).json(nuevovehiculo); 
    } catch (error) {
        
        console.log(error);
    }
   //guarda y manda al body el id
}

export{
    CrearVehiculo
}