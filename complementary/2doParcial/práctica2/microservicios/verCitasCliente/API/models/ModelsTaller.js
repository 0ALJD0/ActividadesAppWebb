"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taller = void 0;
const mongoose_1 = require("mongoose");
const TallerSchema = new mongoose_1.Schema({
    NombreTaller: {
        type: String,
        require: true,
        unique: true
    },
    direccion: {
        type: String,
        require: true,
    },
    telefonoTaller: {
        type: String,
        default: 'NA',
    },
    representante: {
        type: String,
        require: true
    },
    servicios: [
        { type: String }
    ]
});
const Taller = (0, mongoose_1.model)('Taller', TallerSchema);
exports.Taller = Taller;
