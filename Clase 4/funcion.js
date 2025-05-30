// Array para almacenar los libros leídos
let librosLeidos = [];

// Función para agregar un libro al array
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`El libro "${titulo}" ha sido agregado a la lista de libros leídos.`);
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        console.log("Libros leídos:");
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        });
    }
}

// Ejemplo de uso
agregarLibro("El principito");
agregarLibro("Cien años de soledad");
mostrarLibrosLeidos();
