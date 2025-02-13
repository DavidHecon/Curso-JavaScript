// Arreglo de categorías de frutas
let frutas = ['ácidas', 'semiácidas', 'neutras', 'dulces'];

// Arreglo con las frutas clasificadas
let listaFrutas = [
    { nombre: 'kiwi', tipo: 'ácidas' },
    { nombre: 'limón', tipo: 'ácidas' },
    { nombre: 'pomelo', tipo: 'ácidas' },
    { nombre: 'naranja', tipo: 'ácidas' },
    { nombre: 'manzana', tipo: 'ácidas' },
    { nombre: 'uva', tipo: 'ácidas' },
    { nombre: 'arándano', tipo: 'ácidas' },
    { nombre: 'piña', tipo: 'ácidas' },
    
    { nombre: 'fresa', tipo: 'semiácidas' },
    { nombre: 'membrillo', tipo: 'semiácidas' },
    { nombre: 'níspero', tipo: 'semiácidas' },
    { nombre: 'ciruela', tipo: 'semiácidas' },
    { nombre: 'melocotón', tipo: 'semiácidas' },
    { nombre: 'mango', tipo: 'semiácidas' },
    { nombre: 'mandarina', tipo: 'semiácidas' },
    { nombre: 'frambuesa', tipo: 'semiácidas' },

    { nombre: 'coco', tipo: 'neutras' },
    { nombre: 'aguacate', tipo: 'neutras' },
    { nombre: 'aceituna', tipo: 'neutras' },
    { nombre: 'almendra', tipo: 'neutras' },
    { nombre: 'avellana', tipo: 'neutras' },
    { nombre: 'cacahuete', tipo: 'neutras' },
    { nombre: 'nuez', tipo: 'neutras' },

    { nombre: 'plátano', tipo: 'dulces' },
    { nombre: 'cereza', tipo: 'dulces' },
    { nombre: 'higo', tipo: 'dulces' },
    { nombre: 'melón', tipo: 'dulces' },
    { nombre: 'sandía', tipo: 'dulces' },
    { nombre: 'pera', tipo: 'dulces' },
    { nombre: 'granada', tipo: 'dulces' },
    { nombre: 'chirimoya', tipo: 'dulces' }
];

// Objeto para almacenar la cantidad de cada tipo de fruta
const conteoFrutas = {};

// Inicializar el conteo para cada categoría
for (let i = 0; i < frutas.length; i++) {
    conteoFrutas[frutas[i]] = 0;
}

// Contar las frutas según su categoría
for (let i = 0; i < listaFrutas.length; i++) {
    const fruta = listaFrutas[i];
    conteoFrutas[fruta.tipo]++;
}

// Imprimir el resultado
console.log("Conteo de frutas por categoría:", conteoFrutas);
