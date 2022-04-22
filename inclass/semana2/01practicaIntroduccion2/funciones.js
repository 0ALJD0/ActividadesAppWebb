function operacion(n1,n2,operador)
{
    switch (operador) {
        case "+":
            return n1+n2;
        case "-":
            return n1-n2;
        case "*":
            return n1*n2;
        case "/":
            return n1/n2;
        default:
            return 0;
    }
}
function saludar(nombre)
{
    return `hola ${nombre}`

}
//Como exportar variables o funciones y/o metodos desde un archivo.
module.exports = {
    iva:12,
    funcion1:operacion,
    saludar,
}