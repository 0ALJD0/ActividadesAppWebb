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
function buscarVideogamePerID(id) {
    return new Promise((resolver,reject)=>{
        const videogame = videogames.find((videogame)=> videogame.id===id);
        if (!videogame) {
            const error = new Error();
            error.message=`No se ha encontrado el juego con la id ${id}`
            reject(error);
        }
        resolver(videogame);
    })
}
function buscarCompaniaPerId(id){
    return new Promise((resolve,reject)=>{
        const compania = companias.find((compania)=>compania.id===id);
        if (!compania) {
            const error = new Error();
            error.message=`No se ha encontrado la compania con la id ${id}`
            reject(error);
        }
        resolve(compania);
    })
}

/* OTRA MANERA de hacer el mismo funcionamiento pero desde la función.
function buscarCompaniaPerId(game){//ya no tomaríamos el id, si no que tomaríamos el objeto game
    //para obtener el id compania al que pertenece el juego

    return new Promise((resolve,reject)=>{
        const compania = companias.find((compania)=>compania.id===game.id);
        if (!compania) {
            const error = new Error();
            error.message=`No se ha encontrado la compania con la id ${id}`
            reject(error);
        }
        //ahora editaríamos el objeto devuelto en la función y la devolovemos con el reosolve al objeto game
        game.compania=compania;
        delete game.idcompanaia;
        resolve(game);
    })
}*/
//esta es una forma clasra de realizar este ejercicio
//simplmente creadno una vraible auxiliar para guardar
//al objeto, existen otras formas mas complejas

//de la otra forma se haría mas complejo o enredoso porque deberíamos mutar el objeto desde 
//las funciones, lo caul haría que tengamos que volvver a la funcion
//para editarla segun nos convenga
let auxvideogame={};
buscarVideogamePerID(2).
then((videogame)=>{
    auxvideogame=videogame;
    //videogame solo va existir en este scop osea en esta funcion flecha
   //console.log(videogame);
   return buscarCompaniaPerId(videogame.idcompanaia);
})//si se desea se puede poner un catch antes de los siguientes then
//para que se detenga, algo así como los breaks en los switchs.
.then((compania)=>{
    auxvideogame.compania=compania;
    delete auxvideogame.idcompanaia;
    console.log(auxvideogame);
})

.catch((motivo)=>{
    console.log(motivo.message);
})

