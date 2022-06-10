import {Product} from '../models/productos'
import {iproductos} from '../interfaces/index'
import { Request, Response } from 'express'
const obtenerProducto =async (res:Response,req:Request) =>{
 //copia lo mismo que hiciste en la practicaa tnerior pero sin ts
 const id = req.params;
 const producto:iproductos|null=(await Product.findById(id)); ///esto evita que el programa crea que vas  mandar un null
 res.json(producto)
}
const crearProducto =async (res:Response,req:Request) =>{
    const {estado, ...body} = req.body as iproductos;
    const existeProducto = await Product.findOne({nombre:body.nombre})
    if (existeProducto) {
        return res.status(400).json({
            message: `el producto ${body.nombre} ya existe`
        })
    }
    const prodcuto=  new Product(body);
    const nprodcuto= await prodcuto.save();
    return res.status(201).json(
        nprodcuto
    )

}
const obtenerProductos =async (res:Response,req:Request) =>{
    const {limite=10, desde=0} = req.query;
    const query= {estado:true};
    const [total, productos] =await Promise.all([
         Product.countDocuments(query),
         Product.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ])
    res.json({
        total,
        productos

    })   
}
export{
    obtenerProducto,
    crearProducto,
    obtenerProductos
}