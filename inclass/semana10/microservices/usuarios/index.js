const servidor = require('./src/app');
servidor.listen(process.env.PORT ,() => {
    console.log('Microservice of usuario listening on port ' + process.env.PORT);
})