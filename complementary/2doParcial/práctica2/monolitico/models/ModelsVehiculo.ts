import mongoose from 'mongoose';
import {Schema, model, Types} from 'mongoose';
import { IModelsVehiculo } from '../interfaces';


const VehiculoSchema: mongoose.Schema = new Schema<IModelsVehiculo>({
    idcliente: {
        type: Types.ObjectId,
        required: true,
        ref: "Cliente"
    },
    placa:{
        type: String,
        required:true,
        
    },
    Marca:{
        type: String,
        default:'NA'
    },
    Color:{
        type: String,
        default: 'NA'
    },
    Modelo:{
        type: String,
        require: true
    },
})

const Vehiculo: mongoose.Model<IModelsVehiculo> = model<IModelsVehiculo>('Vehiculo',VehiculoSchema);

export{
    Vehiculo
}