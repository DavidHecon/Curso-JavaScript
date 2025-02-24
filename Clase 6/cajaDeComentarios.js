function comentar() {
    let ingresarTexto = document.getElementById("comentario");
    let listaComentarios = document.getElementById("listaComentarios");

    if (ingresarTexto.value.trim() === "") {
        alert("Por favor, escribe un comentario antes de enviarlo.");
        return;
    }

    let nuevoComentario = document.createElement("li");
    nuevoComentario.textContent = ingresarTexto.value;
    listaComentarios.appendChild(nuevoComentario);

    ingresarTexto.value = "";
}