const contactos = [
    {
        nombre: "Carlos Sanchez",
        puesto: "Desarrollador Web",
        empresa: "Tech Solutions",
        correo: "carlos.sanchez@techsolutions.com",
        telefono: "55 1234 5678"
    },
    {
        nombre: "María Gómez",
        puesto: "Diseñadora Gráfica",
        empresa: "Creative Designs",
        correo: "maria.gomez@creativedesigns.com",
        telefono: "55 8765 4321"
    },
    {
        nombre: "Carlos López",
        puesto: "Gerente de Proyectos",
        empresa: "Innovate Corp",
        correo: "carlos.lopez@innovatecorp.com",
        telefono: "55 5555 5555"
    }
];
const generarTarjeta = (contacto) => {
return `============================
|| Nombre: ${contacto.nombre} 
||  Puesto: ${contacto.puesto} 
||  Empresa: ${contacto.empresa} 
||  Correo: ${contacto.correo} 
||  Telefono: ${contacto.telefono} 
============================ `;
};
contactos.forEach(contacto => {
    console.log(generarTarjeta(contacto));
});



/*---------------- for...in: Iterando sobre las Propiedades de un Objetos-----------*/
let persona = {
    nombre: "Carlos",
    edad: 25,
    genero: "Masculino",
    ocupacion: "Desarrollador Web" 
};

for(let propiedad in persona){
    console.log(propiedad + ":" + persona[propiedad]);
}


/*Nota: Si deseas solo las propiedades "propias" de un objeto (y no las heredadas), puedes utilizar el método hasOwnProperty():*/
for (let propiedad in persona) {
    if (persona.hasOwnProperty(propiedad)) {
      console.log(propiedad + ": " + persona[propiedad]);
    }
  }


 /*---------- for...of: Iterando sobre los Valores de un Arreglo o Iterables

Introducido en ES6, el bucle for...of es utilizado para iterar sobre los valores de arreglos y otros objetos iterables (como cadenas de texto, mapas, conjuntos, etc.), lo que lo hace mucho más flexible y legible que otras estructuras de control previas.
Sintaxis: ------------------*/

let numeros = [10, 20, 30, 40];

for (let numero of numeros) {
  console.log(numero);
}


/*--------------forEach(): Iteración funcional (Arreglos)

Introducido en ES5, forEach() es un método de los arreglos que ejecuta una función en cada uno de los elementos de un arreglo. Aunque no es una estructura de control, es muy útil cuando trabajas con arreglos.
Sintaxis: ------------------*/

let lista = [10, 20, 30, 40];

lista.forEach(function(numero) {
  console.log(numero);
});


/*------- map(): Iteración y Transformación (Arreglos)

Introducido en ES5, map() es un método de los arreglos que te permite recorrer un arreglo y devolver un nuevo arreglo con los resultados de aplicar una función a cada uno de los elementos del arreglo original.
Sintaxis:-------------------*/


let arreglo = [1, 2, 3, 4];

let cuadrados = arreglo.map(function(numero) {
  return numero * numero;
});

console.log(cuadrados);  // Salida: [1, 4, 9, 16]

/*Explicación:
El método map() devuelve un nuevo arreglo con los elementos transformados, sin modificar el arreglo original. Es ideal para transformaciones o cálculos en los elementos de un arreglo.*/





