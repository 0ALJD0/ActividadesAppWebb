//- Busqueda de citas por cedula del cliente (lado del cliente) Alejandro Promise

//exportamos los arelgos del archivo Datos.js
const { Usuarios, Vehiculos, Talleres, Agenda } = require("./Datos");

//Requeriremos el modulo readline para hacer los ingresos por consola
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
  });

//Creacion de Promesas

//Promesa buscarUsuario
//Esta promesa lo que hara es buscar al usuario mediante la cdeula que sea ingresada en la función
  function buscarUsuario(cedula) {
	return new Promise((resolver, reject) => {
		//en la condición del find, está validandose que exista un usuario con la cedula ingresada,
		//y que este usuarip sea un cliente
		const usuario = Usuarios.find((usuario) => usuario.Cedula === cedula && usuario.TipoUsuario==="cliente");
		if (!usuario) {
			const error = new Error();
			error.message = `No se ha encontrado ningún usuario con la cedúla ${cedula}`
			reject(error);
		};
		resolver(usuario);
	});
};
//Promesa buscarAgenda
//Esta promesa encontrará la agenda del usuario el cual encontro la promesa buscarUsuario
function buscarAgenda(id) {
	return new Promise((resolver, reject) => {
		//la unica condición de este filter es que la cita pertenesca al usuario y esta no haya sido finalizada
		//para mas info revisar el comentario en Datos.js
		const citas = Agenda.filter((citas) => citas.IdUsuario === id && !citas.Estado);
		if (!citas) {
			const error = new Error();
			error.message = `No se ha encontrado ninguna cita sin finalizar ${id}`
			reject(error);
		};
		resolver(citas);
	});
};
//promesa buscartaller
//Esta promesa se encarga de encontrar el taller perteneciente a la agenda que seleccionará el usuario
function buscarTaller(id) {
	return new Promise((resolver, reject) => {
		//obviamente se esta validadndo que exista este taller
		const taller = Talleres.find((taller) => taller.id === id);
		if (!taller) {
			const error = new Error();
			error.message = `No se ha encontrado ningún taller con el ${id}`
			reject(error);
		};
		resolver(taller);
	});
};
//promesa buscarVehiculo
//Esta promesa se encarga de encontrar el vehiculo perteneciente a la agenda que seleccionará el usuario
function buscarVehiculo(id) {
	return new Promise((resolver, reject) => {
		//obviamente se esta validadndo que exista este vehiculo
		const vehiculo = Vehiculos.find((vehiculo) => vehiculo.id === id);
		if (!vehiculo) {
			const error = new Error();
			error.message = `No se ha encontrado ningún taller con el ${id}`
			reject(error);
		};
		resolver(vehiculo);
	});
};
//promesa pedirDatoRecursivo
//Esta promesa ejecutará gran parte del algoritmo, en esta se pide al usuario que seleccione uno de las 
//citas que no hayan finalizado o cncluido.
const pedirDatoRecursivo = (agenda,ci) => {

	let agend;//almacenará la agenda para usarla en todo el ámbito
	let ans;//almacenará la repuesta ingresada por el usuario (en este casao, el numero de la cita)
	return new Promise((resolve) => {
		//hacemos uso de realine
		readline.question('Ingrese el número de la cita que desee revisar: ', answer => {
			ans=answer;//guardamos en ans, asnwer(esta variable local que almacenará el dato ingresado, como string)
			if (/\d/.test(answer) && (answer >= 1 && answer <= agenda.length)){ //evaluamos que el dato ingresado sea un digito
				//y que esté dentro del rango del arreglo devuelto por buscarAgenda

				resolve(answer);
				readline.close()//cerramos la lectura de linea
				
			}
			else{
				console.log("Ingrese un valor valido")
				pedirDatoRecursivo(agenda);//y si se llega equivocar hacemos que vuelva a ingresar un valor (recursión)
			} //Calling this function again to ask new question
		})
		
	}).then(()=>{//este then lo que hará es mostrar los datos de la agenda que el usuario ingresó
		agend = agenda[Number(ans)-1];//esta edicion del areglo, se hace, por si existen mas de una cita sin concluir
		console.log("Hora: "+agend.Hora + "\n"+"Fecha: "+agend.Fecha);
		return buscarTaller(agend.IdTaller);// retornamos la funcion buscarTaller con el paremetro "agend.IdTaller" 
	}).then((taller)=>{//luego en cada uno de los then se repite la estrcutura, mostramos los datos necesarios y retornamos la siguiente función
		console.log("\nDatos del Taller:\nNombre: "+taller.Nombre+"\n"+
		"Dirección: "+taller.Direccion+"\n"+
		"Telefono: "+taller.Telefono);
		return buscarVehiculo(agend.IdVehiculo);
	}).then((vehiculo)=>{
		console.log("\nDatos del Vehículo:\nPlaca: "+vehiculo.Placa+"\n"+
		"Marca: "+vehiculo.Marca+"\n"+"Color: "+vehiculo.Color+"\n"+
		"Modelo: "+vehiculo.Modelo);
		return buscarUsuario(ci);
	}).then((user)=>{
		console.log("\nDatos del Usuario:\nNombre: "+user.Nombre+"\n"+
		"Cedúla: "+user.Cedula+"\n");
	})
	// .catch((cuestion)=>{
	// ESTE CATCH NO ES NECESARIO, PUESTO QUE EN  buscarAgendas YA EXISTE UNO.	
	// })
  };
//creación de la función principal buscarAgendas
//esta función pide de parametro la cedula,contiene el uso de las promesas para la ejecución del algoritmo.
function  buscarAgendas(ci) {
	
	buscarUsuario(ci).
		then((usuario) => {
			
			return buscarAgenda(usuario.id);
		})
		.then((agenda) => {
			//en este then lo que hacemos es mostrar todas las citas devueltas
			let newcita;//alamacena el arreglo devuelto por Object.entries 
			let a=1;
			
			console.log("Lista de citas pendietes: \n")
			agenda.forEach(cita => {
				console.log((a++)+".-");
				newcita = Object.entries(cita).slice(4, 6);//Object.entries convierte los atributos del objeto en arreglos, y si mismo
				for (let c = 0; c < newcita.length; c++) {
					console.log("\t"+newcita[c][0].toUpperCase() + ": " + newcita[c][1].toUpperCase()+"\n");
				}
			});
			
			return pedirDatoRecursivo(agenda,ci);
		})
		.catch((cuestion) => {//aquí el catch para mostrar cualquier error que se presente y haya sido creado en las promesas como reject()
			console.log(cuestion.message);
			
		});
};


//invocacion de la función principal, con la cedula de un cliente :
buscarAgendas("1357294810");

//fin del algoritmo .