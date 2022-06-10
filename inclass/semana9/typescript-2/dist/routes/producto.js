"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = __importDefault(require("../middlewares"));
const { validacionCamps } = middlewares_1.default;
//corrige esto
const rutas = (0, express_1.Router)();
rutas.get('/', validacionCamps, controllers_1.Product.obtenerProductos);
rutas.get('/:id', controllers_1.Product.obtenerProducto);
rutas.post('/', controllers_1.Product.crearProducto);
