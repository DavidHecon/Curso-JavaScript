document.addEventListener("DOMContentLoaded", function () {
  mostrarComentarios();
});

function postComment() {
  const commentText = document.getElementById('comment').value;
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const fecha = new Date().toLocaleString();

  if (commentText.trim() === "") {
    alert("El comentario no puede ir vacío");
    return;
  }

  const newComment = {
    username: user.username,
    name: user.name,
    image: user.image,
    commentText: commentText,
    timestamp: fecha
  };

  let comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.push(newComment);

  localStorage.setItem('comments', JSON.stringify(comments));

  document.getElementById('comment').value = "";

  mostrarComentarios();
}

function mostrarComentarios() {
  const commentSection = document.getElementById('comment-section');
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

  commentSection.innerHTML = ''; // Limpiar comentarios previos

  comments.forEach((comment, index) => {
    const comentarioSection = document.createElement("section");
    comentarioSection.classList.add("comentario");

    // Modificar el HTML para agregar un contenedor para la cabecera y el cuerpo del comentario
    comentarioSection.innerHTML = `
      <div class="comment-header">
        <div class="user-info">
          <img src="${comment.image}" class="user-image">
          <strong>${comment.name}</strong>
        </div>
        <p class="timestamp">${comment.timestamp}</p>
      </div>
      <p class="comment-text">${comment.commentText}</p>
    `;

    // Agregar botón de eliminar solo si el usuario actual es el autor
    if (loggedUser && loggedUser.username === comment.username) {
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.classList.add("delete-button");
      deleteButton.addEventListener("click", function () {
        eliminarComentario(index);
      });

      // Añadir el botón a la cabecera del comentario (a la derecha)
      comentarioSection.querySelector(".comment-header").appendChild(deleteButton);
    }

    // Añadir el comentario a la sección
    commentSection.appendChild(comentarioSection);
  });
}


function eliminarComentario(index) {
  let comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.splice(index, 1); // Elimina el comentario en la posición específica
  localStorage.setItem('comments', JSON.stringify(comments));
  mostrarComentarios(); // Actualiza la sección de comentarios
}
