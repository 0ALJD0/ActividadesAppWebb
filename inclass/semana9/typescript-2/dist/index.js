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
    tsc es para ejecutar la aplicacion
*/
/*
import express from 'express';
const app = express();
const port = 3000;
app.get(
    '/',(response,request)=>{
        res.json({
            msg:'toto bene'
        })
    }
);
app.listen(port,()=>console.log(`Servidor en el puerto ${port}`)); */
Object.defineProperty(exports, "__esModule", { value: true });
/* import mongoose from "mongoose";
import {Schema,Model} from "mongoose";

const */
console.log('ok');
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const server_1 = require("./server");
const server = new server_1.Server();
server.listen();
