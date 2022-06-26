const servidor = require('./src/app');
servidor.listen(process.env.NODE_ENV || 3000,() => {
    console.log('Servidor listening on port 3000');
});