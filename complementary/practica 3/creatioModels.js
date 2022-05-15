//PRACTICA COMPLMENTARIA #3
const mongoose = require('mongoose'); //importacion del modulo para mongodb
const conexion = 'mongodb+srv://Alejado:ODxf308vMfQdOYyf@practicasappweb.wuwla.mongodb.net/DataBasesAppTallerService?retryWrites=true&w=majority';
//asingnación de la variable, que contendrá el enlace para concectar a la base de datos.
const pedirDatoRecursivo = async () => {//creación de la función flecha, para ejcutar la conexión y creación de los modelos/colecciones
    const estadoConexion = await mongoose.connect(conexion); //nos concestamos a la  base de datos
    const cliente = mongoose.model("cliente", { //creación del modelo para cliente
        nombre: String,
        ci: String,
        telefono: String
    });
    const vehiculo = mongoose.model("vehiculo", {//creación del modelo para vehiculo
        idcliente: {//vehiculo contendra una refrencia con cliente, quien será dueño del vehiculo.
            type: mongoose.Types.ObjectId,
            ref: "cliente"
        },
        placa: String,
        marca: String,
        color: String,
        modelo: String
    });
    const servicios = mongoose.model("servicios", {//creación del modelo de servicios, 
        nombre: String
    });
    const taller = mongoose.model("taller", {//creación del podelo para taller
        nombre: String,
        direccion: String,
        telefono: String,
        representante: String,
        servicios: [{
            servicio: {//creación de un atributo que almacenará todos los servicios que el taller provea
                       //aquí se da la relación M-N puesto que varios talleres pueden tener varios servicios 
                type: mongoose.Schema.Types.ObjectId,
                ref: "servicios"
            }
        }]
    });
    const citas = mongoose.model("citas", {//creación del modelo
        idcliente: {//referecia del cliente al que se le asigno la cita
            type: mongoose.Types.ObjectId, 
            ref: "cliente"
        },
        idtaller: {//referencia al taller al que se asignó la cita
            type: mongoose.Types.ObjectId,
            ref: "taller"
        },
        idvehiculo: {//referenci al vehiculo que será revisado o atendido en la cita
            type: mongoose.Types.ObjectId,
            ref: "vehiculo"
        },
        fecha: String,
        
        estado: Boolean
    });
    const newclient = new cliente({//prueba. crendo una colección en cliente
        nombre: "Kaede Mepuru",
        ci: "1316498094",
        telefono: "0961982573"
    });
    const newvehi = new vehiculo({ //Crear atributos para la coleccion de vehiculos
        idcliente:newclient._id ,
        placa: "BN-5423",
	marca: "Chevrolet",
	color: "azul",
	modelo: "spark 2005",
    });
    
    const guardavehiculo = await newvehi.save();
    const savecliente = await newclient.save();
    console.log(await cliente.find()); //mostramos la generación del cliente
    console.log(await vehiculo.find()) //mostrarmos todos los registros de la coleccion vehiculos

}
pedirDatoRecursivo()