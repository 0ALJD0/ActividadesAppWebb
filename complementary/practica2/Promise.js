//Busqueda de talleres por nombre de taller
const Talleres = [
	{
		id: 1,
		IdUsuario: 8,
		Nombre: "Chavez Lopez Vulcanizadora",
		ListadoDeServicios:["Vulcanizacion", "Lavado de autos","Mantenimiento","Cambio de llantas"],
		Direccion: "La Aurora",
		Telefono: "0564982456"
	},
	{
		id: 2,
		IdUsuario: 9,
		Nombre: "Taller el chinito",
		ListadoDeServicios: ["Lavado de autos", "Cambio de aceites"," Mecanica", "Electricidad"],
		Direccion: "Santa Martha",
		Telefono: "0945672235"
	},
	{
		id: 3,
		IdUsuario: 10,
		Nombre: "Servicio Automotriz Arbolera",
		ListadoDeServicios: ["Desabolladuras","Mecanica", "Mantenimiento", "Estetica automotriz"],
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
		Direccion: "Dubai",
		Telefono: "0467334521"
	},

]
function Buscartallerespornombre(Nombre)
{
    return new Promise((resolver, reject) =>{
        const Tallere = Talleres.find((Talleres)=> Talleres.Nombre===Nombre);
        if(!Tallere)
    {
        const error= new Error();
        error.message=`El Taller con Nombre${Nombre} No pudo ser localizado`;
        reject(error);
    }
    resolver(Tallere);
    console.log(Tallere);

    })


    
}

Buscartallerespornombre ("Taller el chinito");