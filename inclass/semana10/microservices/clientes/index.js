const servidor = require('./src/app');
servidor.listen(process.env.PORT ,() => {
    console.log('Microservice of cliente listening on port ' + process.env.PORT);
})