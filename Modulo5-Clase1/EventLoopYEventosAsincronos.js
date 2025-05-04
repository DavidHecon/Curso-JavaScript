const loginForm = document.getElementById('loginForm');
const statusDiv = document.getElementById('status');
const spinner = document.getElementById('spinner');

// Simula una solicitud al servidor para validar las credenciales
function validarCredenciales(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "usuario@example.com" && password === "123456") {
                resolve("Inicio de sesión exitoso");
            } else {
                reject("Credenciales incorrectas");
            }
        }, 1000); // 1 segundo para simular la respuesta del servidor
    });
}

// Maneja el envío del formulario
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita el envío del formulario tradicional

    // Obtén los valores del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Muestra el spinner y el mensaje de "Cargando..."
    spinner.style.display = "block";
    statusDiv.textContent = "Validando credenciales...";

    try {
        // Espera la validación de las credenciales
        const mensaje = await validarCredenciales(email, password);
        spinner.style.display = "none"; // Oculta el spinner
        statusDiv.textContent = mensaje; // Muestra el mensaje exitoso
        statusDiv.style.color = "green";
    } catch (error) {
        spinner.style.display = "none"; // Oculta el spinner
        statusDiv.textContent = error; // Muestra el mensaje de error
        statusDiv.style.color = "red";
    }
});
