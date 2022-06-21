import express,{Express,Router} from 'express';
import cors from 'cors';
import { dbConect } from './persistence/config';
import { rutas } from './routes/producto';
class Server {
    app: Router;
    router: Router;
    port:Number;
    paths: {[key: string]: string};
    private _express: Express; //colocamos el guon bajo para indicar que esta variable sera privada y asi diferenciarla
    constructor(){
        this.app = Router();
        this.router = Router();
        this.port= Number(process.env["PORT"]);
        this.paths = {
            productos: '/api/productos',
        }
        this.conectarDB();
        this.middleware();
        this.routes();
        this.router.use('/v2/sextob', this.app);
        this._express = express().use(this.router);
    }
    private async conectarDB(){
        await dbConect()
    }
    private middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    private routes(){
        this.app.use(this.paths.productos , rutas )
    }
    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor corriendo en http://localhost:${this.port}/v2/sextob/api/productos`);
            
        })
    }
}

export {Server}