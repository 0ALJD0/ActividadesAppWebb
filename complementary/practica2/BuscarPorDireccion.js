//LLamar a los arreglos del archivo Datos.js
const{Usuarios, Vehiculos, Talleres, Agenda} = require("./Datos");

//La implementacion de esta funcion busca dar un ejemplo de lo que un cliente obtendria al buscar talleres cerca de su localidad
// Consiste en que el cliente la localidad en la que se encuentra y en base a esto el sistema devolvera una lista de los talleres que cumple con sus requerimientos
//uso de una funcion asincronica para realizar la busqueda de los talleres en base a las funciones
async function  buscarTallerDireccion(ubicacion)
{
    //Se usa metodo filter para guardar todos los elementos del arreglo que coincidan con lo buscado en un constante
    //declarada
    const local = Talleres.filter((Direccion) => Direccion.Direccion === ubicacion);
    if (local ==!local){
        //implementacion de un mensaje de error en caso de que la direccion buscada no se encuentre disponible
        const Mensaje = new Error();
        Mensaje.message=`No hay talleres registrados en la direccion de ${ubicacion}`;
        throw Mensaje;
    }
    //si se encuentra el elemento de retorna la constante
    return local;

}


(async ()=> {
    //uso de try..catch en para presentar los elementos buscados o muestre un mensaje en caso de haber un exepcion
    try {
        const local1 = await buscarTallerDireccion("Las Vegas");
            //delete local1.id;
            //delete local1.IdUsuario;
        //Aqui se muestran los datos solicutado por el cliente
        console.log(local1);
    } catch (Mensaje) {
        console.log(Mensaje.message)
    }
})();

