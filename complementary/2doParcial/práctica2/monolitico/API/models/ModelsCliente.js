"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const mongoose_1 = require("mongoose");
const UsuarioSchema = new mongoose_1.Schema({
    Nombre: {
        type: String,
        required: true
    },
    Correo: {
        type: String,
        required: true,
    },
    ci: {
        type: String,
        required: true, //
    },
    telefono: {
        type: String
    }
});
const Usuario = (0, mongoose_1.model)('Cliente', UsuarioSchema);
exports.Usuario = Usuario;
