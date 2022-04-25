const videogames = [
	{
		id: 1,
		name: "God of war",
		plataforma: ["PC", "PS4", "PS5"],
		idcompanaia: 1
	},
	{
		id: 2,
		name: "The evil within",
		plataforma: ["PC", "PS4", "PS5"],
		idcompanaia: 1
	},
	{
		id: 3,
		name: "BloodBorn",
		plataforma: ["PS4", "PS5"],
		idcompanaia: 1
	},
	{
		id: 4,
		name: "Blade & Soul",
		plataforma: ["PC"],
		idcompanaia: 2

	}
]
const companias = [
	{
		id: 1,
		name: "Sony Enterteiment",
	},
	{
		id: 2,
		name: "independiente",
	}
]
function browserGamePerId(id, callback) {
	//si es solo una intruccion se puede colocar así:
	//(videogame)=> videogame.id===id
	const videogame = videogames.find((videogames) => { return videogames.id === id; });
	if (!videogame) {
		const error=new Error();
		error.message=`Videojuego no encontrado con la id ${id}`;
		return callback(error);
	}
	return callback(null,videogame);
}
function browserCompaniaPerId(id,callback) {
	const compania=companias.find((companias)=>companias.id===id);
	if (!compania) {
		const error=new Error();
		error,message=`Compañia no encontrado con la id ${id}`;
		return callback(error);
	}
	return callback(null,compania);

}
//el primer parametro del callback, debería ser un error y el segundo lo que
//devolverá la función o esperamos recibir.
browserGamePerId(2,(err,videogame)=>{
	if (err) {
		console.log(err.message);
		return;
	}
	browserCompaniaPerId(videogame.idcompanaia,(err,compania)=>{
		if (err) {
			console.log(err.message);
			return;
		}
		videogame.nombreCompania=compania;
		delete videogame.idcompanaia;
		console.log(videogame);
		//Podríamos seguir creando y ubicando las funciones a un nivel mas profundo, para
		//todo los daos que necesitemos enviar o tomar o juntar
		//heste es una de las particularidades de los callbacks
		
	});
});
