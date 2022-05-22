const {validationResult}= require('express-validator');
const res = require('express/lib/response');
const validarCampos=()=>{
    const errors= validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json(errors);
    }
    next();
}
module.exports={validarCampos};