// Seleccionamos el botón y el párrafo
let cambiarTexto = document.getElementById("parrafo");
let cambiarTitulo = document.getElementById("saludo")
let boton = document.getElementById("btn-cambiar");

// Agregamos el evento al botón, no al párrafo
boton.addEventListener('click', function() {
    cambiarTexto.innerHTML = 'Este parrafo ya fue modificado';
    cambiarTitulo.innerHTML = 'Hola amigo David'
});