//La exportacion de los arrays del archivo ./datos.js
const {Usuarios, Vehiculos, Talleres, Agenda} = require("./Datos.js");

//funcion para buscar el usuario por numero de cedula con callback
function buscarUsuarioPorCedula(cedula, callback) {
    //utilizamos el metodo find para poder devolver el primer elemento del array 
    //que cumpla el predicado que se pasa como parámetro e ingresarlo en otra variable
    const usuario = Usuarios.find((usuario)=> parseInt(usuario.Cedula) === cedula);
    if (!usuario) {
        //para controlar el error
        const error = new Error();
        error.message = `El usuario con la cedula: ${cedula}, no se encuentra registrado.`;
        //retorna en el callback, el error.
        return callback(error);
    }
    //si no da error retorna en el callback el objeto usuario.
    return callback(null, usuario);
}


//funcion para buscar el usuario por numero de cedula con callback
function buscarVehiculoPorId(id, callback) {
    //utilzamos el metodo "filter" con el fin de  devolver un nuevo array que contiene todos los elementos 
    //de aquél para el cual se llama que cumplan el predicado que se le pasa como parámetro
    const vehiculo = Vehiculos.filter((vehiculo)=> vehiculo.IdUsuario === id);
    if (!vehiculo) {
        //Para controlar el error.
        const error = new Error();
        error.message = `no hay vehiculos registrado del cliente: ${id}`;
        //retorna en el callback, el error.
        return callback(error);

    }
    //si no da error retorna en el callback el objeto vehiculo.
    return callback(null, vehiculo);
    
}

//llamamos a la funcion "buscarUsuarioPorCedula" teniendo como parametro la cedula y una funcion flecha.
buscarUsuarioPorCedula(123569845, (error, usuario)=> {

    if (error) {
        console.log(error.message);
        return
    }
    //trabajamos la funcion "buscarVehiculoPorId" dentro de la otra funcion, teniendo en cuenta que en cada una controlamos el error.
    buscarVehiculoPorId(usuario.id, (error, vehiculo)=>{
        if (error) {
            console.log(error.message);
            return;
        } else {
            //Si no hay error se muestra el cliente y sus datos
            console.log(`||Cliente: ${usuario.Nombre} || Cedula: ${usuario.Cedula}||`);
            
            //Se utiliza un "forEach" * para recorrer el array de vehiculo
            vehiculo.forEach(element => {
                if (element.Estado == "Finalizado") {
                    estado = `\x1b[32mFinalizado`;
                } else {
                    estado = `\x1b[31mEn Proceso`;
                }
                console.log(`\n\x1b[36mPlaca: \x1b[37m${element.Placa}   \x1b[36mMarca: \x1b[37m${element.Marca}   \x1b[36mColor: \x1b[37m${element.Color}  \n\x1b[36mModelo: \x1b[37m${element.Modelo}\t   \x1b[36mEstado: \x1b[37m${estado}`);
            });
        }
    })
})
