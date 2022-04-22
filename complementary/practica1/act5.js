/*
5.	Crear una función flecha que reciba un arreglo de comidas
    y lo devuelva en mayúsculas y mejoras en su formato de presentación.
*/ 
//llamando mi arreglo de comidas favoritas
const {fcomidas} = require("./act2_4");
//probando/*
const awa = (Arreglo)=> {
    var arry=[];
    for (let a = 0; a < Arreglo.length; a++) {

        //una forma mas robusta de mostrar los datos
		/*console.log("NOMBRE"+Arreglo[a].nombre.toUpperCase()+"\n"+
        "INGREDIENTES"+Arreglo[a].ingredientes.toUpperCase()+"\n"+
        Arreglo[a].tipo.toUpperCase()+"\n"+
        Arreglo[a].temperaturaAlServir.toUpperCase()+"\n"+
        Arreglo[a].dondeSeSirve.toUpperCase()+"\n"
        );*/
        arry=Object.entries(Arreglo[a]);
        //Mostrando el objeto en esa vuelta convertido en Arreglo
        //para poder manipularlo mejor
        //console.log(arry);
        for (let b = 0; b < arry.length; b++) {
            var arrin1=arry[b];
            //Mostrando el Sub Arreglo que contendrá  el par de atributos del arreglo
            // "["name", "value"]"
            //console.log(arrin1);
            for (let c = 0; c < arrin1.length-1; c++) {
                // lo que hago es mostrar de forma subsecuente tanto el identifiador
                //como el valor del atributo,
                //todo esto para poder manipularlos como strings, y pasar todo a mayusculas ;)
             console.log(arrin1[0].toUpperCase()+": "+arrin1[1].toUpperCase());

            }
           
        }
        //preba cn structura robusta
        /*console.log(arry);*/
        console.log("\n");
	}
}
awa(fcomidas);

//pruebas diversas
/*console.log(fcomidas);*//*
favoritefoods=fcomidas[0].nombre.toUpperCase();
console.log(favoritefoods);*/
