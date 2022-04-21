class Person {
    constructor (name, lastname)
    {
        this.name=name;
        this.lastname=lastname;
    }
    getNameFull()
    {
        return `${this.name} ${this.lastname}`

    }
    person ={
        name:"",
        lastanme:"",
        isMaster:"",
        geolocation:{
            lat:12.5545,
            lng:23.5455,
        },
        test: ()=>{
            return this.name;
        }
    }
}
let personaX = new Person('Bryan','Arce');
console.log(personaX.person.test());