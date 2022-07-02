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
exports.CrearCliente = void 0;
const models_1 = require("../models");
const CrearCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dato = __rest(req.body, []);
    const clienteExiste = yield models_1.Usuario.findOne({ ci: dato.ci });
    /* if (clienteExiste)
    {
        res.status(400).json({
            message:
            `Ya existe un cliente con esa cedula ${clienteExiste.ci}`
        })
    } */
    const cliente = new models_1.Usuario(dato);
    const clientenuevo = yield cliente.save();
    res.status(201).json(clientenuevo); //envialo por el cuerpo con axios
    //lo guardas con una variable y luego lo envías
});
exports.CrearCliente = CrearCliente;
