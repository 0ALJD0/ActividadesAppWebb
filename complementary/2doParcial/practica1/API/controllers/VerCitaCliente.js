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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verCitasCliente = void 0;
const models_1 = require("../models");
const verCitasCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dato = __rest(req.body, []); //el nombre del taller
    const existeTaller = yield models_1.Taller.find({ NombreTaller: dato.NombreTaller });
    if (existeTaller.length > 0) {
        const citas = yield models_1.Citas.find({ idtaller: existeTaller[0]._id,
            estado: false, eliminado: false
        }).populate('idcliente', 'Nombre').populate('idtaller', 'NombreTaller')
            .populate('idvehiculo', 'placa');
        //console.log(citas);
        return res.json(citas);
    }
    res.status(400).json({ message: `No se encontró el Taller con el nombre: ${dato.NombreTaller}` });
});
exports.verCitasCliente = verCitasCliente;
