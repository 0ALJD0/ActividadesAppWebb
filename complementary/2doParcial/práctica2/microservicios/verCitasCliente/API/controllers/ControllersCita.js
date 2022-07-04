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
exports.ControllerCita = void 0;
const models_1 = require("../models");
class ControllerCita {
    pushCita(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dato = __rest(req.body, []);
                const cita = new models_1.Citas(dato);
                const nuevaCita = yield cita.save();
                res.json({
                    data: nuevaCita,
                    message: "Cita guardada con exito."
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getCitasCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dato = __rest(req.body, []);
                const clienteExistente = yield models_1.Usuario.find({ ci: dato.ci });
                if (clienteExistente.length > 0) {
                    const citas = yield models_1.Citas.find({ idcliente: clienteExistente[0]._id,
                        estado: false, eliminado: false
                    }).populate('idcliente', 'Nombre').populate('idtaller', 'NombreTaller')
                        .populate('idvehiculo', 'placa');
                    return res.json({
                        data: citas
                    });
                }
                else {
                    return res.status(400).json({ message: `No se encontro el cliente con ci: ${dato.ci}` });
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deleteCita(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const citaModificada = yield models_1.Citas.findByIdAndUpdate(id, { eliminado: true }, { new: true });
                res.json({
                    data: citaModificada
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.ControllerCita = ControllerCita;
