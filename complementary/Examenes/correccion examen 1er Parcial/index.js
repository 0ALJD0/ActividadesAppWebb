const express=require('express');
const cors = require('cors');
const rutas=require('./routes/index');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

//creación de la ruta principal y asignación de las subrutas
app.use('/api',rutas);

app.listen(port,()=>console.log(`Servidor funcionando por puerto ${port}`));