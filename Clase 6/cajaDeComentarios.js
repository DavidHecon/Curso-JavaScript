function comentar() {
    let ingresarTexto = document.getElementById("comentario");
    let listaComentarios = document.getElementById("listaComentarios");

    if (ingresarTexto.value.trim() === "") {
        alert("Por favor, escribe un comentario antes de enviarlo.");
        return;
    }

    let nuevoComentario = document.createElement("li");

    // Crear la fecha y hora
    let fecha = new Date();
    let fechaHora = `${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}`;

    // Crear un botón para eliminar el comentario
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function () {
        listaComentarios.removeChild(nuevoComentario);
    };

    // Añadir el texto, la fecha y el botón al comentario
    nuevoComentario.innerHTML = `<strong>${ingresarTexto.value}</strong> <em>(${fechaHora})</em> `;
    nuevoComentario.appendChild(botonEliminar);

    listaComentarios.appendChild(nuevoComentario);

    ingresarTexto.value = "";
}
