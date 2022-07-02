import { Citas, Usuario } from "../models";
import { IModelsCitas } from "../interfaces";
import { Request, Response } from "express";

class ControllerCita {
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