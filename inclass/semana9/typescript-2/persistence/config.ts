import { connect } from "mongoose";

const dbConect = async ()=>{
    try {
      await  connect(process.env.MONGODB||'');
      console.log('toto bene')
    } catch (error) {
       console.log(error)
       throw new Error("No se pudo conectar a la DB");
        
    }
}
export{dbConect}