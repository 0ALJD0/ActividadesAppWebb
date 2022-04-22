/*2.Crear un objeto Comida que tenga como parámetros: nombre, 
ingredientes, tipo (ensalada, plato fuerte, entrada, etc.)
 y cualquier otro atributo que considere importante para su diseño.*/

const Comida = {
	nombre: "Sopa de Tuna",
	ingredientes: "Atún, Cebolla Colorada, Ajo, Agua? , Pimienta, Sal, Ravioles",
	tipo: "Caldo",
	temperaturaAlServir: "Caliente",
	dondeSeSirve: "Plato Ondo o Sopero"
}

/*3.	Definir un arreglo con sus comidas favoritas, 
		teniendo como base el objeto del punto anterior.
*/
const comidasFavoritas = [
	{
		nombre: "Pan con Leche",
		ingredientes: "Pan, Leche, Chocolate en Polvo",
		tipo: "Postre/Desayuno",
		temperaturaAlServir: "Tibio",
		dondeSeSirve: "Plato Ondo o Sopero, O en un plato plano los panes y la leche en una taza"
	},
	{
		nombre: "Empanadas de Camaron",
		ingredientes: "Relleno de Camarónn, Verde rayado o Harina, Aceite, ",
		tipo: "Aperitivo",
		temperaturaAlServir: "Caliente",
		dondeSeSirve: "Plato plano o Servilleta"
	},
	{
		nombre: "Burritos de Carne",
		ingredientes: "Carne Molida, Pimienta, Sal, Refrito de Verduras, Frejól Rojo, Tortilla de Trigo",
		tipo: "Aperitivo",
		temperaturaAlServir: "Caliente",
		dondeSeSirve: "Plato plano"
	}
]

/*
4.	Recorrer el arreglo definido
	en la opción anterior y mostrarlo aplicando
	4 estructuras de repetición.
*/
function recorrerFor(Arreglo) {
	console.log("Recorrido con FOR \n");
	console.log(Arreglo.length);
	for (let a = 0; a < Arreglo.length; a++) {
		console.log(Arreglo[a]);
		console.log("\n");

	}
}
function recorrerWhile(Arreglo) {
	console.log("Recorrido con While \n");
	let I = 0;
	while (I < Arreglo.length) {

		console.log(Arreglo[I]);
		console.log("\n");
		I++;
	}
	I = 0;
}
function recorrerDoWhile(Arreglo) {
	console.log("Recorrido con Do While \n");
	let aka = 0;
	let objeto;
	do {
		objeto = Arreglo[aka];
		console.log(objeto);
		console.log("\n");
		aka++;
	} while (aka < Arreglo.length);

}
function recorrerForEach(Arreglo) {
	console.log("Recorrido con For Each \n");
	Arreglo.forEach(comida => {
		console.log("Nombre: "+comida.nombre+"\n"
		+"Ingredientes: "+comida.ingredientes+"\n"
		+"Tipo: "+comida.tipo+"\n"
		+"TemperaturaAlServir: "+comida.temperaturaAlServir+"\n"
		+"DondeSeSirve: "+comida.dondeSeSirve+"\n"
		);
		
	});
}

recorrerFor(comidasFavoritas);
recorrerWhile(comidasFavoritas);
recorrerDoWhile(comidasFavoritas);
recorrerForEach(comidasFavoritas);



