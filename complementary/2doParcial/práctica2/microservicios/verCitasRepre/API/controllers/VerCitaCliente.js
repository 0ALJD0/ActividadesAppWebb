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
//Creo mi controlador para mi ruta en el cual el representante podrá ver las citas que tiene agendada a su taller
const models_1 = require("../models");
//Cargue los datos que deberian estar en la BD para asi poder probarlos y comprobar
const vehiculo1 = new models_1.Vehiculo({
    "id": "01A",
    "idcliente": "01B",
    "placa": "MAC2789",
    "Marca": "MercedesBenz",
    "Color": "Negro",
    "Modelo": "GLB 200"
});
const cliente1 = new models_1.Usuario({
    "id": "01B",
    "Nombre": "Felipao",
    "Correo": "FFCM@hotmail.com",
    "ci": "1354257894",
    "type": "cliente",
    "telefono": "0987451236"
});
const taller1 = new models_1.Taller({
    "id": "01C",
    "NombreTaller": "Agua Mecanica",
    "direccion": "Costa Azul",
    "telefonoTaller": "098546342",
    "representante": "Juan Carlos",
    "servicios": ["servicio1", "servicio2", "servicio3"]
});
const cita1 = new models_1.Citas({
    "id": "01D",
    "idcliente": "01B",
    "idtaller": "01C",
    "idvehiculo": "01A",
    "trabajo": "servicio1",
    "fechaCreacion": "29/03/21",
    "estado": false,
    "eliminado": false
});
const verCitasCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield taller1.save();
    yield cliente1.save();
    yield vehiculo1.save();
    yield cita1.save();
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
    //Aqui luego de que se comprobo se borrar para que se puedan usar otra vez sin que se repitan los datos.
    yield models_1.Taller.findOneAndDelete({ NombreTaller: "Mecanica Acua" });
    yield models_1.Usuario.findOneAndDelete({ id: "01B" });
    yield models_1.Vehiculo.findOneAndDelete({ id: "01A" });
    yield models_1.Citas.findOneAndDelete({ id: "01D" });
});
exports.verCitasCliente = verCitasCliente;
