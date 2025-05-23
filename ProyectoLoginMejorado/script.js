// Datos de usuarios
const users = [
  {
    name: "David",
    email: "david@example.com",
    username: "david",
    password: "123",
    image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
  },
  {
    name: "Juan",
    email: "juan@example.com",
    username: "juan",
    password: "345",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
  },
];

// Elementos del DOM
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const showRegister = document.getElementById("show-register");
const showLogin = document.getElementById("show-login");
const loginError = document.getElementById("login-error");
const registerError = document.getElementById("register-error");

// Alternar entre formularios
showRegister?.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

showLogin?.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});

// Función para manejar el login
function handleLogin(e) {
  e.preventDefault();
  
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  loginError.textContent = "";

  // Validación de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    loginError.textContent = "Por favor, introduce un correo electrónico válido.";
    return;
  }

  if (!email || !password) {
    loginError.textContent = "Por favor completa todos los campos";
    return;
  }

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));
    window.location.href = "home.html";
  } else {
    loginError.textContent = "Usuario o contraseña incorrectos";
  }
}

// Configurar eventos para el login
if (loginForm) {
  // Evento principal (funciona con submit del formulario y Enter)
  loginForm.addEventListener("submit", handleLogin);
  
  // Evento adicional para Enter como respaldo
  document.getElementById("login-password")?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  });
}

// Función para manejar el registro
function handleRegister(e) {
  e.preventDefault();
  
  const name = document.getElementById("register-name").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const username = document.getElementById("register-username").value.trim();
  const password = document.getElementById("register-password").value.trim();
  const confirm = document.getElementById("register-confirm").value.trim();

  registerError.textContent = "";

  // Validaciones
  if (!name || !email || !username || !password || !confirm) {
    registerError.textContent = "Por favor completa todos los campos";
    return;
  }

  if (password !== confirm) {
    registerError.textContent = "Las contraseñas no coinciden";
    return;
  }

  if (users.some((u) => u.username === username)) {
    registerError.textContent = "El nombre de usuario ya está en uso";
    return;
  }

  if (users.some((u) => u.email === email)) {
    registerError.textContent = "El correo electrónico ya está registrado";
    return;
  }
  
  if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(name)) {
    registerError.textContent = "El nombre no debe contener números";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    registerError.textContent = "Por favor, introduce un correo electrónico válido.";
    return;
  }

  // Crear nuevo usuario
  const newUser = {
    name,
    email,
    username,
    password,
    image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg",
  };

  users.push(newUser);
  localStorage.setItem("loggedUser", JSON.stringify(newUser));
  window.location.href = "home.html";
}

// Configurar eventos para el registro
if (registerForm) {
  registerForm.addEventListener("submit", handleRegister);
}