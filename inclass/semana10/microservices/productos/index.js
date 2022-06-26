const servidor = require('./src/app');
servidor.listen(process.env.PORT ,() => {
    console.log('Microservice of product listening on port ' + process.env.PORT);
})