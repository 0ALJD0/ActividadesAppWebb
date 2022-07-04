import mongoose from 'mongoose';
import {Schema, model,Types} from 'mongoose';
import { IModelsCitas } from '../interfaces/IModelsCitas';

const CitasSchema: mongoose.Schema = new Schema<IModelsCitas>({
    id:{
        type: String,
    },
    idcliente: {
        type: Types.ObjectId, 
        ref: "Cliente"
    },
    idtaller: {
        type: Types.ObjectId,
        ref: "Taller"
    },
    idvehiculo: {
        type: Types.ObjectId,
        ref: "Vehiculo"
    },
    trabajo:[{
        type: String,
        require: true
    }],
    fechaCreacion:{
        type:Date,
        default: Date.now
    },
    estado:{
        type: Boolean,
        default: false,
        required: true,
    },
    eliminado:{
        type:Boolean,
        default:false,    
    }

});

const Citas: mongoose.Model<IModelsCitas>= model<IModelsCitas>('Cita', CitasSchema );


export{
    Citas
}