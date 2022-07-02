"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middleware_1 = __importDefault(require("../middleware"));
const { CrearVehiculo } = controllers_1.Cvehiculo;
const { validarCampos } = middleware_1.default;
const router = (0, express_1.Router)();
exports.router = router;
router.post('/nvehiculo', (0, express_validator_1.check)('placa', 'Placa obligatoria'), validarCampos, CrearVehiculo);
