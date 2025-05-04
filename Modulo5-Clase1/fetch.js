/*Funcion que permite cargar usuarios*/

async function loadUser() {
    const container = document.getElementById('user')

    try{                         /*fetch permite hacer peticion a una API*/
        const response = await fetch('https://users.com/users')
        const users = await response.json() /*es un formato el json , java script objet noteishon*/ 
    
        container.innerHTML = users.map(user => `<p>${user.name}</p>`).join('');
    }catch(error){
        console.error(error);
    }
}