//conectando a la base de datos.
const mongoose = require('mongoose');

const conectDb= async ()=>{
    try {
        await mongoose.connect(process.env.MONOGODB_CNN)
        console.log(`Base de datos conectada`)
    } catch (error) {
        console.log(`No se conccectó la base de datos`)
        throw new Error(`Error! no se pudo conectaar a la base de datos`)
    }
}
module.exports={
    conectDb
}