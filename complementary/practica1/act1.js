/*
1.	Crear una función que reciba N como parámetro
 y genere la tabla de multiplicar por consola de este parámetro.
*/ 
//Creación de la función

function generateTable(N) {
    //Ciclo for el cual mostrará la operación respectiva
    for (let index = 1; index <= 12; index++) {
        let R=N*index;
        
        console.log(`${N} x ${index} = ${R} \n`);
        
    }
} 

generateTable(-15);