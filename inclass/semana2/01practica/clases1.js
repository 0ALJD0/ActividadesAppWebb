const person={
    nombre:"Richard",
    apellido:"Brand",
    esDocente: true,
    geolocalizacion:{
        lat:234.234234,
        lng:34.3453453,
    },
    getNombreCompleto: ()=>{
        return `${this.nombre} ${this.apellido}`
    },
    getNombreCompleto2: function(){
        return `${this.nombre} ${this.apellido}`
    },
    
}

 this.nombre='Bryan';
 this.apellido='Arce';
//  console.log(person.getNombreCompleto())


 console.log(`Desde afuera arrow ${person.getNombreCompleto()}`)
  console.log(`Desde afuera convencional ${person.getNombreCompleto2()}`)


function mostrarDatos({ nombre, apellido, geolocalizacion: { lat, lng }, getNombreCompleto, getNombreCompleto2 })
{
    this.nombre='prueba'
    this.apellido='prueba2'
    // console.log(nombre)
    // console.log(apellido)
    // console.log(lat)
    // console.log(lng)
    console.log(`Desde funciOn arrow ${getNombreCompleto()}`)
    console.log(`Desde funciOn convencional ${getNombreCompleto2()}`)

}


 mostrarDatos(person);