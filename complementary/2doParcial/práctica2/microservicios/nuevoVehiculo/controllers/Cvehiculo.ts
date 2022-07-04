import {Vehiculo,Usuario} from '../models'
import { IModelsVehiculo} from '../interfaces'
import{Request, Response} from 'express'

const Usuario1= new Usuario({
    "Nombre":"Rigoberto35",
    "Correo":"rigober35to@gmail.com",
    "ci":"12034356785",
    "telefono":"0923432345"
});

const Usuario2= new Usuario({
    "Nombre":"Arturo",
    "Correo":"ArturoMati1@gmail.com",
    "ci":"13162537663",
    "telefono":"0992102935"
});



const CrearVehiculo = async (req: Request,res: Response)=>{

    try {
        // guardar usuario creados para la prueba
        await Usuario1.save();
        await Usuario2.save();
        
        const {...dato} = req.body;
        const vehiculo = new Vehiculo(dato);
        const nuevovehiculo= await vehiculo.save();
        res.status(201).json(nuevovehiculo);
        
        const [total, vehiculos] = await Promise.all([
            Vehiculo.countDocuments(),
            Vehiculo.find(),
        ])
        console.log({message:'--Vehiculos registrados--',total:total,datos:vehiculos,
        })

        //borrar usuarios
        await Usuario.findOneAndDelete({Nombre:"Rigoberto35"});
        await Usuario.findOneAndDelete({Nombre:"Arturo"});
    } catch (error) {
        
        console.log(error);
    }
   //guarda y manda al body el id
}

    

export{
    CrearVehiculo
}