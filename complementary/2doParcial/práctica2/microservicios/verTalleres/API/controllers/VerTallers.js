"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verTalleres = void 0;
const models_1 = require("../models");
// voy a crear los talleres que se mostrará al realizar la consulta en mi ruta /clientf/talleres
const taller1 = new models_1.Taller({
    "NombreTaller": "Agua Mecanica",
    "direccion": "Costa Azul",
    "telefonoTaller": "098546342",
    "representante": "Juan Carlos",
    "servicios": ["servicio1", "servicio2", "servicio3"]
});
const taller2 = new models_1.Taller({
    "NombreTaller": "Mecanica Acua",
    "direccion": "Costa Azul",
    "telefonoTaller": "098546342",
    "representante": "Juan Carlos",
    "servicios": ["servicio43", "servicio433", "servicio23"]
});
const verTalleres = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //guardo los talleres
    yield taller1.save();
    yield taller2.save();
    //hago la consulta y muestro los talleres
    const talleres = yield models_1.Taller.find().populate('servicios', 'servicio');
    res.json({
        Microservicio: "verTalleres",
        data: talleres
    });
    //borro los talleres
    yield models_1.Taller.findOneAndDelete({ NombreTaller: "Mecanica Acua" });
    yield models_1.Taller.findOneAndDelete({ NombreTaller: "Agua Mecanica" });
});
exports.verTalleres = verTalleres;
