// Crear el objeto "Libro"
function Libro(titulo, autor, anio, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.estado = estado;
    this.capitulos = []; // Propiedad opcional: lista de capítulos

    // Método para describir el libro
    this.describirLibro = function() {
        return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
    };

    // Método para agregar un capítulo
    this.agregarCapitulo = function(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" agregado al libro "${this.titulo}".`);
    };

    // Método para eliminar un capítulo
    this.eliminarCapitulo = function(capitulo) {
        const indice = this.capitulos.indexOf(capitulo);
        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
            console.log(`Capítulo "${capitulo}" eliminado del libro "${this.titulo}".`);
        } else {
            console.log(`El capítulo "${capitulo}" no se encontró en el libro "${this.titulo}".`);
        }
    };
}

// Ejemplo de uso
const miLibro = new Libro("El Principito", "Antoine de Saint-Exupéry", 1943, "disponible");
console.log(miLibro.describirLibro()); // Describir el libro

miLibro.agregarCapitulo("Capítulo 1: Introducción"); // Agregar capítulo
miLibro.agregarCapitulo("Capítulo 2: El Principito llega al asteroide B-612"); // Agregar capítulo

console.log(miLibro.capitulos); // Mostrar lista de capítulos

miLibro.eliminarCapitulo("Capítulo 1: Introducción"); // Eliminar capítulo
console.log(miLibro.capitulos); // Mostrar lista de capítulos después de eliminar
