import mongoose, { model } from "mongoose";
import {Schema,Model} from "mongoose";
import {iproductos} from '../interfaces/index'

const ProductoSchema : mongoose.Schema= new Schema<iproductos>({
    nombre:{
        type:String
    },
    
    precio: {tupe: Number},

    estado: {type:Boolean},
    costo: {type:Number},
    minimo:{type:Number}

})


const Product: mongoose.Model<iproductos>= model<iproductos>('Producto', ProductoSchema);
export{
    Product
}