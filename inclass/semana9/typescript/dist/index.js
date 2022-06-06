"use strict";
/*
    COMANDOS USADOS:
    npm init -y
    npm i express express-validator cors mongoose
    npm i nodemon -D
    npm i -g typescript
    npm i typescript
    tsc --init
    npm i --save-dev @types/express
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.json({
        msg: 'toto bene'
    });
});
app.listen(port, () => console.log(`Servidor en el puerto ${port}`));
