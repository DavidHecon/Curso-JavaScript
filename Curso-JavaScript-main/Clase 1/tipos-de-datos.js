console.log('Hola mundo');

//Datos primitivos

let nombre = 'David';
let edad = 25;
let esMayor = true;
let vacio;
let nulo = null;
let id = Symbol("id");
let numeroGrande = 9007199254740991n;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof esMayor);
console.log(typeof vacio);
console.log(typeof nulo);
console.log(typeof id);
console.log(typeof numeroGrande);
console.log("--------------------");

console.log(nombre);
console.log(edad);
console.log(esMayor);
console.log(vacio);
console.log(nulo);
console.log("--------------------");

/*
* Variable que funciona como objeto
*/
let perro = {
    nombre: 'Firulais',
    edad: 5,
    raza: 'Pastor Aleman',
    vacunas: true 
}

console.log(perro);
console.log(perro.raza);

