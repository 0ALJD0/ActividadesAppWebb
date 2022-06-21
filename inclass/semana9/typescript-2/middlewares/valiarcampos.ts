/*import { NextFunction, Request, Response } from 'express'
import {validationResult} from 'express-validator'

const validarCamps = (res:Response,req:Request,next:NextFunction)=>{
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
}
export{validarCamps}*/
import { NextFunction, Request, Response } from 'express';
import  { validationResult  }  from 'express-validator';


const validarCampos = (req: Request ,res: Response, next: NextFunction)=>{
    const errors= validationResult(req);

    if (!errors.isEmpty())
    {
        return res.status(400).json(errors)
    }
    next()

}


export {
    validarCampos
}