document.getElementById('registroEvento').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita el envío automático del formulario

  // Variables
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const intereses = document.querySelectorAll('input[name="intereses"]:checked');
  const horario = document.querySelector('input[name="horario"]:checked');
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const archivo = document.getElementById('archivo').files[0];

  // Validaciones adicionales
  if (nombre.length < 3) {
    alert('El nombre debe tener al menos 3 caracteres.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    alert('Por favor, introduce un correo electrónico válido.');
    return;
  }

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(telefono)) {
    alert('El teléfono debe contener exactamente 10 dígitos.');
    return;
  }

  if (intereses.length === 0) {
    alert('Por favor, selecciona al menos un interés.');
    return;
  }

  const today = new Date().toISOString().split('T')[0];
  if (fecha < today) {
    alert('La fecha no puede ser en el pasado.');
    return;
  }

  if (!archivo || archivo.size > 2 * 1024 * 1024) {
    alert('El archivo debe ser menor a 2 MB.');
    return;
  }

  // Si todo está bien
  alert('Registro exitoso. ¡Gracias por registrarte!');
});
