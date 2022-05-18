const {Schema, model} = require('mongoose');

const ProductSchama = Schema({
    nombre : {
        type : String,
        required : [true, `El nombre es importante`],
        unique: true
    },
    estado : {
        type : Boolean,
        required : true,
        default: true
    },
    precio:{
        type : Number,
        default: 0
    },
    costo:{
        type : Number,
        default: 0
    },
    minimo:{
        type : Number,
        default: 0
    },
    stock:{
        type : Number,
        default: 0
    },

})
module.exports = model('Producto', ProductSchama);