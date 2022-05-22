const express = require('express');
const cors = require('cors');
const {conectDb}= require('./basedata/config');

class Server {
    constructor(){
        this.app=express.Router();
        this.router=express.Router();

        this.port=process.env.PORT;
        this.paths={//aquí irían todas las rutas que hemos definido en la carpeta routes
            productos:'/api/productos',
        }
        this.conectDB();
        this.middleware();
        this.routes();
        this.router.use('/vi/sextoA',this.app)
        this._express=express().use(this.router);
    }
    async conectDB(){
        await conectDb();
    }
    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes(){
        this.app.use(
            this.paths.productos
            ,require('./routes/productos'));
    }
    listen(){
        this._express.listen(this.port,()=>{
            console.log(`Servidor corriendo por puerto ${this.port}`)
        })
    }      
}
module.exports=
    Server;