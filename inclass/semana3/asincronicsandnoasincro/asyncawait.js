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
//estas funciones permiten que podamos trabajar con otras funciones
//a pesar de que no tengamos los datos, porque tendremos el async y el await,
//que permitirán que mientras no se haya obtenido un dato anteriro,
//no continue con la ejecuciín del código.
async function buscarGamePerId(id) {
	//el find no es una función que tarde en encontrar los valores
	//pero  usamos el asynx pora observar la estructura de una función asyncronic
	const game = videogames.find((game)=>game.id===id);
	if (!game) {
		const error = new Error();
		error.message=`No se ha encontrado el juego con la id ${id}`;
		throw error;
	}
	return game;
}
async function buscarCompanyPerId(id) {
	//el find no es una función que tarde en encontrar los valores
	//pero  usamos el asynx pora observar la estructura de una función asyncronic
	const company = companias.find((company)=>company.id===id);
	if (!company) {
		const error = new Error();
		error.message=`No se ha encontrado la Compañia con la id ${id}`;
		throw error;
	}
	return company;
}
//usamos el await para que espere el tiempo necesario para tomar los datos
//es necesario usar una estructura de error
async function main() {
	const game =await buscarGamePerId(1); //si quitaramos el await soltaría error, porque aun no existe el dato
	//la siguiente linea no se ejecutara hasta que la funcion no nos devuelva
	//un valor. (para esto funciona la plabra await)
	//debemos de crear  una función async para hacer usp de la función que nos devolverá el dato
	//(videogame)
	const Company =await buscarCompanyPerId(game.idcompanaia);
	game.Compania=Company;
	delete game.idcompanaia;
	console.log(game);
	
}
main();
//otra forma de ejecutar lo que esta en el main, sin tener que crear una funcion main xd
//es haciendola una función anónima como la siguiente:
/*
(async()=>{ //para controlar el error usariamos el try catch
	try{
 	const game =await buscarGamePerId(1); 
	const Company =await buscarCompanyPerId(game.idcompanaia);
	game.Compania=Company;
	delete game.idcompanaia;
	console.log(game);	
	}
	catch (error){
		console.log(errror.message);
	}
})(); //la llamada de la función estaría aquí*/

