"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCamps = void 0;
const express_validator_1 = require("express-validator");
const validarCamps = (res, req, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
};
exports.validarCamps = validarCamps;
