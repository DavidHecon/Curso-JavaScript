
//Modificacion de valores
const persona = {
    nombre: 'Juan',
    edad: 25,
    ciudad:"cdmx"
}

persona.ciudad = "Guadalajara";
persona.estatura = 1.80;

delete persona.estatura;

//Objetos con metodos

const coche = {
    marca: 'Ford',
    modelo: 'Mustang',
    color: 'Rojo',

    arrancar: function(){
        console.log('El coche esta arrancando');
    }
}

coche.arrancar(coche.marca);

//Metodo abreviado
const calculadora ={
    suma(x,y){
        return x+y;
    }
}
console.log(calculadora.suma(2,3));

const trabajo ={
    nombre: "BBVA",
    puesto: "Software Engineer",
    ubicacion:{  //Este es un sub objeto dentro de mi objeto
        ciudad: "CDMX",
        calle: "Reforma",
        pais: "Mexico"

    }
}

console.log(trabajo.nombre);
console.log(trabajo.ubicacion.ciudad);
console.log(trabajo["ubicacion"]["pais"]); //Otra forma de hacer

//Para modificar un parametro
trabajo.ubicacion.calle = "Insurgentes";
console.log(trabajo.ubicacion.calle);

/*--------------------------------------------*/

const usuario = {
    nombre: 'Juan',
    saludar: function(){
        console.log(`Hola soy ${this.nombre}`);
    }
}

usuario.saludar();

/*Diferencia de objeto y clase, es que el objeto ya esta hecho con datos fijos 
y la clase se crea un molde para ser reutilizado para cualquier cosa que queramos hacer*/

//Molde de objetos con Class
class Persona  {
    constructor(nombre, edad, genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;

    }

    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`)
    }
}

const personaDavid = new Persona('David', 25);
personaDavid.saludar()

const personaOscar = new Persona ("Oscar", 20);
personaOscar.saludar();

class Estudiante extends Persona{
    constructor(nombre, edad, genero, carrer, promedio){
        super(nombre,edad,genero)
        this.carrera = carrer;
        this.promedio = promedio;

    }

    estudiar(){
        console.log(`${this.nombre} esta estudiando en ${this.carrera}`);
        
    }
}

const AnaPaola = new Estudiante("Ana", 24,"Femenino", "Enfermeria", 10)
AnaPaola.estudiar();
//Accede a los de padre tambien
AnaPaola.saludar();