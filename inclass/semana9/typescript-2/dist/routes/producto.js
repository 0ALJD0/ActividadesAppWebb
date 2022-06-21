"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutas = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = __importDefault(require("../middlewares"));
//corrige esto
const rutas = (0, express_1.Router)();
exports.rutas = rutas;
rutas.get('/', middlewares_1.default.validarCampos, controllers_1.Product.obtenerProductos);
rutas.get('/:id', controllers_1.Product.obtenerProducto);
rutas.post('/', controllers_1.Product.crearProducto);
