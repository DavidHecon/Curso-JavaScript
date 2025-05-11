// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        callback(biblioteca);
    }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible, callback) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    setTimeout(() => {
        // Agregar el nuevo libro a `biblioteca.libros`
        biblioteca.libros.push(nuevoLibro);
        console.log(`Libro agregado: ${titulo}`);
        if (callback) callback();  // Llamar al callback después de agregar el libro
    }, 1000);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado, callback) {
    setTimeout(() => {
        const libro = biblioteca.libros.find(libro => libro.titulo === titulo);
        if (libro) {
            libro.disponible = nuevoEstado;
            console.log(`Estado actualizado para el libro "${titulo}" a: ${nuevoEstado ? 'Disponible' : 'Prestado'}`);
            if (callback) callback();  // Llamar al callback después de actualizar el libro
        } else {
            console.log(`Libro con título "${titulo}" no encontrado.`);
            if (callback) callback();
        }
    }, 1000);
}

// Ejemplo de cómo ejecutar la aplicación
console.log("Cargando inventario inicial...");
mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true, () => {
    actualizarDisponibilidad("1984", false, () => {
        mostrarLibros();  // Llamar a mostrarLibros después de todas las operaciones
    });
});
