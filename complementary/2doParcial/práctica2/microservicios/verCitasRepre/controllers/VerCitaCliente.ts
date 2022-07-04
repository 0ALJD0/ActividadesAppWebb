//Creo mi controlador para mi ruta en el cual el representante podrá ver las citas que tiene agendada a su taller
import {Citas, Taller, Usuario, Vehiculo} from '../models'
import{Request, Response} from 'express'

//Cargue los datos que deberian estar en la BD para asi poder probarlos y comprobar

const vehiculo1 = new Vehiculo ({
    "id":"01A",
    "idcliente":"01B",
    "placa": "MAC2789",
    "Marca": "MercedesBenz",
    "Color": "Negro",
    "Modelo": "GLB 200"
})

const cliente1 = new Usuario ({
    "id": "01B", 
    "Nombre": "Felipao",
    "Correo": "FFCM@hotmail.com",
    "ci": "1354257894",
    "type": "cliente",
    "telefono":"0987451236"
})

const taller1 = new Taller({
    "id":"01C",
    "NombreTaller":"Agua Mecanica",
    "direccion":"Costa Azul",
    "telefonoTaller":"098546342",
    "representante":"Juan Carlos",
    "servicios":["servicio1","servicio2","servicio3"]
})

const cita1 = new Citas({
    "id":"01D",
    "idcliente": "01B",
    "idtaller": "01C",
    "idvehiculo": "01A",
    "trabajo": "servicio1",
    "fechaCreacion": "29/03/21",
    "estado": false,
    "eliminado": false
})

const verCitasCliente = async (req:Request,res:Response)=>{
    await taller1.save();
    await cliente1.save();
    await vehiculo1.save();
    await cita1.save();
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
    //Aqui luego de que se comprobo se borrar para que se puedan usar otra vez sin que se repitan los datos.
    await Taller.findOneAndDelete({NombreTaller:"Mecanica Acua"});
    await Usuario.findOneAndDelete({id:"01B"});
    await Vehiculo.findOneAndDelete({id:"01A"});
    await Citas.findOneAndDelete({id:"01D"});
}
export {verCitasCliente}
