//ssitema para registro de lcientes y talleres de vehiculos, donde los clientes podrán elegir entre los
//tallares que tengan el servicio que necesitan, puedan elegirlo, registrarse y generar un agendamiento|
const Usuarios = [
	{
		id: 1,
		Nombre: "Armando Casas",
		Cedula: "123569845", //sí el usuario desea conocer si esta registrado, ingresará su cedúla
		TipoUsuario: "cliente"
	},
	{
		id: 2,
		Nombre: "Sofia Montenegro",
		Cedula: "1357294810",
		TipoUsuario: "cliente"
	},
	{
		id: 3,
		Nombre: "Erik Pico",
		Cedula: "1244356721",
		TipoUsuario: "cliente"
	},
	{
		id: 4,
		Nombre: "Nabil Robles",
		Cedula: "1316287462",
		TipoUsuario: "cliente"
	},
	{
		id: 5,
		Nombre: "Juan Menendez",
		Cedula: "1533894567",
		TipoUsuario: "cliente"
	},
	{
		id: 6,
		Nombre: "Amy Mendoza",
		Cedula: "1433254818",
		TipoUsuario: "cliente"
	},
	{
		id: 7,
		Nombre: "Kyokai Dark",
		Cedula: "0072530043",
		TipoUsuario: "cliente"
	},
	{
		id: 8,
		Nombre: "María Lequerica",
		Cedula: "1247859635",
		TipoUsuario: "representante"
	},
	{
		id: 9,
		Nombre: "George Whashington",
		Cedula: "1432589753",
		TipoUsuario: "repressentante"
	},
	{
		id: 10,
		Nombre: "León Febres Cordero",
		Cedula: "4876593251",
		TipoUsuario: "representante"
	},
	{
    		id: 11,
		Nombre: "Lucio Guitierrez Altamira",
		Cedula: "0678944672",
		TipoUsuario: "representante"
	},
   	{
    		id: 12,
		Nombre: "Marta Aguilera Vera",
		Cedula: "0678956671",
		TipoUsuario: "representante"
	}

];

const Vehiculos = [
	{
		id: 1,
		IdUsuario: 1,
		Placa: "BN-5423",
		Marca: "Chevrolet",
		Color: "Amarillo",
		Modelo: "spark 2005",
        	Estado: "En proceso"
	},
	{
		id: 2,
		IdUsuario: 2,
		Placa: "GSY-G032",
		Marca: "Kia",
		Color: "Gris",
		Modelo: "Kia Rio",
		Estado: "En proceso"
	},
	{
		id: 3,
		IdUsuario: 3,
		Placa: "HAH-D525",
		Marca: "Chevrolet",
		Color: "Rojo",
		Modelo: "Aveo Family 2015",
        	Estado: "En proceso"
	},
	{
		id: 4,
		IdUsuario: 4,
		Placa: "HEA-1744",
		Marca: "Chevrolet",
		Color: "azul",
		Modelo: "Chevette cargo",
        	Estado: "En proceso"
	},
	{
		id: 5,
		IdUsuario: 5,
		Placa: "AK-0047",
		Marca: "Renault",
		Color: "Azul",
		Modelo: "Sendero",
        	Estado: "Finalizado"
	},
	{
		id: 6,
		IdUsuario: 6,
		Placa: "BMX-2003",
		Marca: "Volkswagen",
		Color: "Negro",
		Modelo: "Virtus",
        	Estado: "En proceso"
	},
	{
		id: 7,
		IdUsuario: 7,
		Placa: "KKR-070",
		Marca: "Ford",
		Color: "Rojo",
		Modelo: "Mustang",
        	Estado: "Finalizado"
	},
    {
		id: 8,
		IdUsuario: 1,
		Placa: "KKP-5423",
		Marca: "Chevrolet",
		Color: "Negro",
		Modelo: "spark 2008",
        Estado: "Finalizado"
	},
	{
		id: 9,
		IdUsuario: 1,
		Placa: "EMA-5321",
		Marca: "Ford",
		Color: "Negro",
		Modelo: "F-150",
        Estado: "Finalizado"
	}
];
const Talleres = [
	{
		id: 1,
		IdUsuario: 8,
		Nombre: "Chavez Lopez Vulcanizadora",
		ListadoDeServicios:["Vulcanización", "Lavado de autos","Cambio de llantas"],
		Direccion: "La Aurora",
		Telefono: "0564982456"
	},
	{
		id: 2,
		IdUsuario: 9,
		Nombre: "Taller el chinito",
		ListadoDeServicios: ["Lavado de autos", "Cambio de aceites", "Mantenimiento"," Mecanica y Electricidad"],
		Direccion: "Santa Martha",
		Telefono: "0945672235"
	},
	{
		id: 3,
		IdUsuario: 10,
		Nombre: "Servicio Automotriz Arbolera",
		ListadoDeServicios: ["Desabolladuras","Mecanica", "Mantenimiento", "Estetica automotriz", "Montaje de llantas"],
		Direccion: "El Palmar",
		Telefono: "0997482291"
	},
	{
		id: 4,
		IdUsuario: 11,
		Nombre: "Taller Mercurio",
		ListadoDeServicios:["Lavado de autos","Mantenimiento","Cambio de llantas"],
		Direccion: "Santa Marta",
		Telefono: "0988421562"
	},
    	{
		id: 5,
		IdUsuario: 12,
		Nombre: "taller de pintura y desabolladura el rosal",
		ListadoDeServicios:["Pintura","Deshabulladura","Estetica automotriz"],
		Direccion: "Las Vegas",
		Telefono: "0636395728"
	},
    	{
		id: 6,
		IdUsuario: 12,
		Nombre: "taller de mecanica especialista Don miguel",
		ListadoDeServicios:["Vulcanizacion", "Lavado de autos","Mantenimiento","Cambio de llantas"],
		Direccion: "Las Vegas",
		Telefono: "0467334521"
	}

]
const Agenda = [
	{
		id: 1,
		IdTaller: 1,
		IdUsuario: 1,
		IdVehiculo: 1,
		Hora: "08:00",
		Fecha: "15/04/2002",
		Servicio: "Vulcanizacion",
		Estado: false //estado representa si la cita ha sido conluida "true" o no "false"
	},
	{
		id: 2,
		IdTaller: 2,
		IdUsuario: 2,
		IdVehiculo: 2,
		Hora: "09:45",
		Fecha: "18/04/2022",
		Servicio: "Cambio de Aceites",
		Estado: false
	},
	{
		id: 3,
		IdTaller: 2,
		IdUsuario: 3,
		IdVehiculo: 3,
		Hora: "08:00",
		Fecha: "24/04/2022",
		Servicio: "Mantenimiento",
		Estado: false
	},
	{
		id: 4,
		IdTaller: 3,
		IdUsuario: 4,
		IdVehiculo: 4,
		Hora: "09:45",
		Fecha: "30/04/2022",
		Servicio: "Desabolladuras",
		Estado: false
	},
	{
		id: 5,
		IdTaller: 1,
		IdUsuario: 5,
		IdVehiculo: 5,
		Hora: "08:40",
		Fecha: "02/05/2022",
		Servicio: "Lavado de autos",
		Estado: false
	},
	{
		id: 6,
		IdTaller: 2,
		IdUsuario: 6,
		IdVehiculo: 6,
		Hora: "09:25",
		Fecha: "06/05/2022",
		Servicio: "Mecaninca y Electricidad",
		Estado: false
	},
	{
		id: 7,
		IdTaller: 3,
		IdUsuario: 7,
		IdVehiculo: 7,
		Hora: "10:45",
		Fecha: "09/05/2022",
		Servicio: "Estetica automotriz",
		Estado: false
	}
];
module.exports ={
	Usuarios,
	Vehiculos,
	Talleres,
	Agenda
}
