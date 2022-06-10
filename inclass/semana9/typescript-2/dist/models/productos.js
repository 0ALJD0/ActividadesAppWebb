"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const ProductoSchema = new mongoose_2.Schema({
    nombre: {
        type: String
    },
    precio: { tupe: Number },
    estado: { type: Boolean },
    costo: { type: Number },
    minimo: { type: Number }
});
const Product = (0, mongoose_1.model)('Producto', ProductoSchema);
exports.Product = Product;
