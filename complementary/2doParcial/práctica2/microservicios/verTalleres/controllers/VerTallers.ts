import {Taller} from '../models'
import { IModelsTaller} from '../interfaces'
import{Request, Response} from 'express'

const verTalleres=async(req: Request,res:Response)=>{
    const talleres = await Taller.find().populate('servicios','servicio');
    res.json({
        Microservicio: "verTalleres",
        data: talleres
    });
}
export{
    verTalleres
}