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
exports.editarTaller = exports.crearTaller = void 0;
const models_1 = require("../models");
const crearTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dato = __rest(req.body, []);
    const tallerExiste = yield models_1.Taller.findOne({ NombreTaller: dato.NombreTaller });
    if (tallerExiste) {
        res.status(400).json({
            message: `Este taller ya exite! ${tallerExiste.NombreTaller}`
        });
    }
    const taller = new models_1.Taller(dato);
    const nuevotaller = yield taller.save();
    res.json(nuevotaller);
});
exports.crearTaller = crearTaller;
const editarTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const dato = __rest(req.body, []);
    //retorna el json de la cita en la qie esta el usuario.
    const citaModificada = yield models_1.Taller.findByIdAndUpdate(id, dato, { new: true }).populate('servicios', 'servicio');
    res.json(citaModificada);
});
exports.editarTaller = editarTaller;
//
