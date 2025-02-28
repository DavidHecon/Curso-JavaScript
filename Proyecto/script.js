const davidUser = "david"
const davidPassword = "123"

function logIn(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById("error");

    if(username === davidUser && password === davidPassword){
        localStorage.setItem("loggedUser", username);
        window.location.href = "home.html";
    }else{
        error.textContent = "Usuario o contraseña incorrectos"
    }
}