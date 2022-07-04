"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Citas = void 0;
const mongoose_1 = require("mongoose");
const CitasSchema = new mongoose_1.Schema({
    idcliente: {
        type: mongoose_1.Types.ObjectId,
        ref: "Cliente"
    },
    idtaller: {
        type: mongoose_1.Types.ObjectId,
        ref: "Taller"
    },
    idvehiculo: {
        type: mongoose_1.Types.ObjectId,
        ref: "Vehiculo"
    },
    trabajo: [{
            type: String,
            require: true
        }],
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    estado: {
        type: Boolean,
        default: false,
        required: true,
    },
    eliminado: {
        type: Boolean,
        default: false,
    }
});
const Citas = (0, mongoose_1.model)('Cita', CitasSchema);
exports.Citas = Citas;
