import mongoose from 'mongoose';
import {Schema, model} from 'mongoose';
import { IModelsTaller } from '../interfaces';

const TallerSchema: mongoose.Schema = new Schema<IModelsTaller>({
    id:{
        type: String,
    },
    NombreTaller:{
        type: String,
        require: true,
        unique:true
    },
    direccion:{
        type: String,
        require: true,
    },
    telefonoTaller:{
        type: String,
        default: 'NA',
        
    },
    representante:{
        type: String,
        require: true
    },
    servicios:[
        {type:String}
    ]
})

const Taller: mongoose.Model<IModelsTaller> = model<IModelsTaller>('Taller',TallerSchema);

export{
    Taller
}