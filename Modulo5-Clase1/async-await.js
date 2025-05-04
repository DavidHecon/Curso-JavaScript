// Una función que simula la obtención de datos desde un servidor
function getDataFromServer() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Datos obtenidos del servidor");
      }, 2000); // Simula un retraso de 2 segundos
    });
  }
  
  // Función asincrónica que usa async/await
  async function fetchData() {
    console.log("Obteniendo datos...");
    const data = await getDataFromServer(); // Espera a que se resuelva la promesa
    console.log(data); // Muestra los datos
  }
  
  fetchData();
  


/*Async/Await: Introducido en ES8, permite escribir código asincrónico de manera que parezca sincrónico.*/

async function obtenerDatos() {
    const respuesta = await fetch('https://api.example.com/data');
    const datos = await respuesta.json();
    console.log(datos);
}

obtenerDatos();