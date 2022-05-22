const {response}=require('express');
const {}= require('../models');
const ObtenerProductos= async(req,res=response)=>{
    const {limite=10, desde=0} = req.query;
    const query= {estado:true};
    const [total, productos] =await Promise.all([
        await producto.countDocuments(query),
        await producto.find(query)
        
    ])
    res.json({
        total,
        productos

    })    
 //usar .lean para obtener objetos mas livianos si hay demasiados datos,
 //pero ya no se puede hacer populate, porque el arreglo es de objetos es de js
 //y no de mongoose
}
const ObtenerProducto= async (req, res=response) =>{
    const {id}=req.params;
    const Producto =await producto.findById(id);
    res.json(Producto);

}
const crearProducto= async (req,res=response)=>{
    const {estado, ...body} = req.body;

    const productoExiste= await producto.findOne({nombre:body.nombre});
    if (productoExiste) {
        res.status(400).json({
            message:`El producto con ese nombre no existe ${productoExiste}`
            //te falta lo que va aquí
        })
    }
    const Producto = await producto(body);
    const productoNuevo= await Producto.save();
    res.status(201).json(productoNuevo);
}
const actualizarProducto= async (req,res=response)=>{
    const {id} = req.params;
    const {estado, ...data}=req.body;
    const productoModificado=
        await producto.findByIdAndUpdate(id,data,{new:true});
        res.json(productoModificado);
}
const borrarProducto= async(req,res=response)=>{
    const {id} = req.params;
    const productoBorrado=
        await producto.findByIdAndUpdate(id,{estado:false}, {new:true});
    res.json(productoBorrado);

}
module.exports={
    ObtenerProducto,
    ObtenerProductos,
    crearProducto,
    actualizarProducto,
    borrarProducto
}