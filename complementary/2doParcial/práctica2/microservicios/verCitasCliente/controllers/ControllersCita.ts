import { Citas, Usuario, Taller, Vehiculo } from "../models";
import { IModelsCitas } from "../interfaces";
import { Request, Response } from "express";

class ControllerCita {
    vehiculo1 = new Vehiculo ({
        "id":"01A",
        "idcliente":"01B",
        "placa": "MAC2789",
        "Marca": "MercedesBenz",
        "Color": "Negro",
        "Modelo": "GLB 200"
    })
    
    cliente1 = new Usuario ({
        "id": "01B", 
        "Nombre": "Evelyn",
        "Correo": "EveM@hotmail.com",
        "ci": "1354287634",
        "type": "cliente",
        "telefono":"0987451236"
    })
    
    taller1 = new Taller({
        "id":"01C",
        "NombreTaller":"Agua Mecanica",
        "direccion":"Costa Azul",
        "telefonoTaller":"098546342",
        "representante":"Juan Carlos",
        "servicios":["servicio1","servicio2","servicio3"]
    })
    
    cita1 = new Citas({
        "id":"01D",
        "idcliente": "01B",
        "idtaller": "01C",
        "idvehiculo": "01A",
        "trabajo": "servicio1",
        "fechaCreacion": "29/03/21",
        "estado": false,
        "eliminado": false
    })
    
    async pushCita(req: Request,res: Response) {
        try {
            const {...dato} = req.body as IModelsCitas;
            const cita = new Citas(dato);
            const nuevaCita = await cita.save();
            res.json({
                data: nuevaCita,
                message: "Cita guardada con exito."
            })
        } catch (error) {
            console.log(error);
        }
    }



    async getCitasCliente(req: Request, res: Response){ 
        try {
            await this.taller1.save();
            await this.cliente1.save();
            await this.vehiculo1.save();
            await this.cita1.save();
            const {...dato} = req.body;
            const clienteExistente = await Usuario.find({ci:dato.ci});
            if(clienteExistente.length > 0){
                const citas = await Citas.find({idcliente:clienteExistente[0]._id,
                    estado: false, eliminado: false
                }).populate('idcliente','Nombre').populate('idtaller', 'NombreTaller')
                .populate('idvehiculo', 'placa');

                return res.json({
                    data: citas
                })
            } else {
                await Taller.findOneAndDelete({NombreTaller:"Mecanica Acua"});
                await Usuario.findOneAndDelete({id:"01B"});
                await Vehiculo.findOneAndDelete({id:"01A"});
                await Citas.findOneAndDelete({id:"01D"});
                return res.status(400).json({message: `No se encontro el cliente con ci: ${dato.ci}`}); 
            }
        } catch (error) {
            console.log(error);
        }
    }

    async deleteCita(req: Request, res: Response) {
        try {
            const {id} = req.params;

            const citaModificada = await Citas.findByIdAndUpdate(id, {eliminado: true}, {new: true});
            res.json({
                data: citaModificada
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export{
    ControllerCita
}