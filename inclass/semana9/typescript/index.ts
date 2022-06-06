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

import express from 'express';
const app = express();
const port = 3000;
app.get(
    '/',(req,res)=>{
        res.json({
            msg:'toto bene'
        })
    }
);
app.listen(port,()=>console.log(`Servidor en el puerto ${port}`));