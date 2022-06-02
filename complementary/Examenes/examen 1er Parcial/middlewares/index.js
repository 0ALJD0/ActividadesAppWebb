/* Pregunta 2 
Middleware para validar los datos ingresados al arreglo 
*/

const validate=(req,res,next)=>{
    const {...dato}=req.body;
    if (dato.nombre.length>5) {
        res.status(400).send({
            error:`el nombre no puede ser mayor a 5 letras ${dato.name}`
        })
    }  
    if (dato.apellido.length>5) {
      res.status(400).send({
          error:`el apellido no puede ser mayor a 5 letras ${dato.lastname}`
      })
    }
    next();
  };
  module.exports=validate;