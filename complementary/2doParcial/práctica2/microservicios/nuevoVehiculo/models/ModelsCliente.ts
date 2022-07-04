import mongoose from 'mongoose';
import {Schema, model} from 'mongoose';
import {IModelsCliente} from '../interfaces';

const UsuarioSchema: mongoose.Schema = new Schema<IModelsCliente>({
    Nombre:{
        type: String,
        required: true
    },
    Correo:{
        type:String,
        required:true,
    },
    ci:{
        type: String,
        required:true,//
    },
    telefono:{
        type: String
    }
})

const Usuario: mongoose.Model<IModelsCliente> = model<IModelsCliente>('Cliente',UsuarioSchema);

export{
    Usuario
}
