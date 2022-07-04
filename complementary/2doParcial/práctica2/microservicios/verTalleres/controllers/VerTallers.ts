import {Taller} from '../models'
import { IModelsTaller} from '../interfaces'
import{Request, Response} from 'express'
// voy a crear los talleres que se mostrará al realizar la consulta en mi ruta /clientf/talleres
const taller1 = new Taller({
    "NombreTaller":"Agua Mecanica",
    "direccion":"Costa Azul",
    "telefonoTaller":"098546342",
    "representante":"Juan Carlos",
    "servicios":["servicio1","servicio2","servicio3"]
});

const taller2= new Taller({
    "NombreTaller":"Mecanica Acua",
    "direccion":"Costa Azul",
    "telefonoTaller":"098546342",
    "representante":"Juan Carlos",
    "servicios":["servicio43","servicio433","servicio23"]
});
    


const verTalleres=async(req: Request,res:Response)=>{
    //guardo los talleres
    await taller1.save();
    await taller2.save();
    //hago la consulta y muestro los talleres
    const talleres = await Taller.find().populate('servicios','servicio');
    res.json({
        Microservicio: "verTalleres",
        data: talleres
    });
    //borro los talleres para evitar que repitan los mismos
    await Taller.findOneAndDelete({NombreTaller:"Mecanica Acua"});
    await Taller.findOneAndDelete({NombreTaller:"Agua Mecanica"});
}
export{
    verTalleres
}