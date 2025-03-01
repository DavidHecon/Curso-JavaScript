const users = [
    {name:"David", username:"david", password:"123", image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"Juan", username:"juan", password:"345", image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"Pedro", username:"pedro", password:"567", image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
]

function logIn(){
    const usernamePage = document.getElementById('username').value.trim();
    const passwordPage = document.getElementById('password').value.trim();
    const error = document.getElementById("error");

    const userFind = users.find(user => user.username === usernamePage && user.password === passwordPage);

    if(userFind){
        localStorage.setItem("loggedUser", JSON.stringify(userFind)); // JSON.stringify(userFind)) hace que mi objeto se vuelva string en lugar de {} sera "" en linea 2,3,4
        window.location.href = "home.html";
    }else{
        error.textContent = "Usuario o contraseña incorrectos"
    }
}