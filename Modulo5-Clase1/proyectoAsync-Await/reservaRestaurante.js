// Simulando una base de datos de mesas
const mesasDisponibles = 5; // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve(`Hay suficientes mesas disponibles. Mesas solicitadas: ${mesasSolicitadas}`);
      } else {
        reject(`No hay suficientes mesas disponibles. Solo hay ${mesasDisponibles} mesas libres.`);
      }
    }, 2000); // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const envioExitoso = Math.random() > 0.2; // 80% de probabilidad de éxito
      if (envioExitoso) {
        resolve(`Correo de confirmación enviado a ${nombreCliente}.`);
      } else {
        reject("Error al enviar el correo de confirmación.");
      }
    }, 1500); // Simula el envío de un correo (1.5 segundos)
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(disponibilidad);

    console.log("Enviando confirmación de reserva...");
    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacion);

    console.log("¡Reserva completada exitosamente!");
  } catch (error) {
    console.log("Error:", error);
  }
}

// Llamadas de prueba
hacerReserva("Juan Pérez", 3); // Intenta hacer una reserva para 3 personas
// hacerReserva("Ana López", 6);  Intenta hacer una reserva para 6 personas (más que las disponibles)
