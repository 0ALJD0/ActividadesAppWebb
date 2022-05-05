//Busqueda de citas (lado de la empresa)
//Ectraccion de datos de datos.js
const { Usuarios, Vehiculos, Talleres, Agenda } = require("./Datos");
//Usado para el ingreso de datos por consola
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
//Promesa pedirDatoRecursivo
  //Creacion de promesa que almacenara los datos recursivos para la muestra en la consola y la busqueda de los datos
  const pedirDatoRecursivo = (agenda) => {
	//ans almacenará la repuesta ingresada por el usuario
    let ans;
	return new Promise((resolve) => {
		//usamos el readline para la seleccion de la cita que requiere ver
		readline.question('Ingrese el número de la cita que desee revisar: ', answer => {
			//guardamos en ans, asnwer, esta almacenara los datos ingresados como un string
            ans=answer;
            //Usamos el if para verificar si existe el dato y si es un digito valido
			if (/\d/.test(answer) && (answer >= 1 && answer <= agenda.length)){ 
				resolve(ans);
				readline.close()
			}
			else{
                //Si ingresa un valor equivoco, puede volver a ingresar el dato
				console.log("Ingrese un valor valido")
				pedirDatoRecursivo(agenda);
			}
		})
	//los then muestran los datos ordenados para una mejor visualizacion	
	}).then((dato)=>{
        agenda=agenda[dato-1] //esta se usa para pasar las citas
        //llamado a la funcion callback 
        buscarClientePorIdUsuario(agenda.IdUsuario, (error, usuario)=>{
            if (error) {
                console.log(error.message);
                return;
            }
            //lineas para mostrar los datos con una estructura decente
            console.log("\nDatos del Usuario:\nNombre: "+usuario.Nombre+"\n"+
            "Cedúla: "+usuario.Cedula+"\n");
            console.log("\nFecha y Hora de la cita agendada:\nHora: "+agenda.Hora + "\n"+"Fecha: "+agenda.Fecha);
            buscarVehiculoPorId(agenda.IdVehiculo,(error, vehiculo)=>{
                if (error) {
                    console.log(error.message);
                    return;
                }
                console.log("\nDatos del Vehículo:\nPlaca: "+vehiculo.Placa+"\n"+
                "Marca: "+vehiculo.Marca+"\n"+"Color: "+vehiculo.Color+"\n"+
                "Modelo: "+vehiculo.Modelo);
            })
        })
    })
  };
//creacion de funcion busqueda de taller por id
function buscarTallerPorId(id, callback){
    const taller = Talleres.find((taller)=> taller.id === id);
    if (!taller){
        const error = new Error();
        error.message = `El taller no existe`
        return callback(error);
    }
    return callback(null, taller);
}
//creacion de funcion busqueda agenda por id del taller y el estado de la cita
function buscarAgendaTaller(Id, callback){
    const cita = Agenda.filter((cita)=> cita.IdTaller === Id && !cita.Estado);
    if(!cita){
        const error = new Error ();
        error.message = `No se encontraron citas para este taller o todas estan concluidas`
        return callback(error);
    }  
    return callback(null, cita)
}
//creacion de funcion busqueda de cliente por id del usuario
function buscarClientePorIdUsuario (id, callback){
    const usuario = Usuarios.find((usuario)=> usuario.id === id);
    if(!usuario){
        const error = new Error ();
        error.message = `No existe ese usuario ${id}`
        return callback(error);
    }
    return callback(null, usuario) 
}
//creacion de funcion busqueda vehicula por id de la agenda
function buscarVehiculoPorId (id, callback){
    const vehiculo = Vehiculos.find((vehiculo)=> vehiculo.id === id);
    if(!vehiculo){
        const error = new Error ();
        error.message = `No existe ese vehiculo ${id}`
        return callback(error);
    }
    return callback(null, vehiculo) 
}
//llamados de las funciones
buscarTallerPorId (3, (error, taller)=> {
    if (error) {
        console.log(error.message);
        return;
    }
    buscarAgendaTaller (taller.id,(error, citas)=>{
        if (error) {
            console.log(error.message);
            return;
        }

        let newcita, a=1;
        citas.forEach(cita => {
            console.log((a++)+".-");
            newcita = Object.entries(cita).slice(4, 6);//Object.entries convierte los atributos del objeto en arreglos, y si mismo
            for (let c = 0; c < newcita.length; c++) {
                console.log("\t"+newcita[c][0].toUpperCase() + ": " + newcita[c][1].toUpperCase()+"\n");
            }
        });

        //llamado de la funcion principal 
        pedirDatoRecursivo (citas)
    })
    
}) 