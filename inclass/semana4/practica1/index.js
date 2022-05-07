const mongoose = require('mongoose');
const conexion= "mongodb+srv://Alejado:ODxf308vMfQdOYyf@practicasappweb.wuwla.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

( async ()=>{
    const estadoConexion = await mongoose.connect(conexion);
    const Usuario =  mongoose.model("Usuario", {
		id: Number,
		Nombre: String,
		Cedula: String, //sí el usuario desea conocer si esta registrado, ingresará su cedúla
		TipoUsuario: String
	} );
    const usuario1=  new Usuario({
		id: 1,
		Nombre: "Armando Casas",
		Cedula: "123569845", //sí el usuario desea conocer si esta registrado, ingresará su cedúla
		TipoUsuario: "cliente"
	});
    const guardado=  await usuario1.save();
    const resultado =  await Usuario.find();
    console.log(resultado)
})();