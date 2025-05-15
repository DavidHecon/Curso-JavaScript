import axios from "axios";

// Referencias a botones y contenedor
const fetchBtn = document.getElementById("fetch-btn");
const axiosBtn = document.getElementById("axios-btn");
const dataContainer = document.getElementById("container");

// Función genérica para renderizar datos
function renderData(items, styleClass) {
  dataContainer.innerHTML = '';           // Limpia contenido previo
  dataContainer.className = '';            // Quita clases previas
  if(styleClass) dataContainer.classList.add(styleClass); // Agrega clase según llamada

  items.forEach(item => {
    const characterElement = document.createElement('div');
    characterElement.classList.add('item-container');
      characterElement.innerHTML = `<h2>${item.title}</h2>
      <img src="${item.url}" alt="${item.explanation}"> <p>Fecha :${item.date}</p>`;
        dataContainer.appendChild(characterElement);
  });
}

// Evento para botón Fetch
fetchBtn.addEventListener("click", () => {
  fetch("https://api.nasa.gov/planetary/apod?api_key=Q4wbPS44eZHzlYRJWswhCS09RhfHAXKN0WiafAVS&start_date=2025-03-03&end_date=2025-03-18")
    .then(response => {
      if (!response.ok) throw new Error("Error en la solicitud");
      return response.json();
    })
    .then(data => {
      renderData(data, 'fetch-style');   // Pasa clase para estilo Fetch
    })
    .catch(error => {
      console.error("Error:", error);
      dataContainer.textContent = "Hubo un error al obtener los datos.";
      dataContainer.className = 'error-style';
    });
});

// 1. Instala Axios o inclúyelo mediante una CDN:
//   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// 2. Escribe una función que utilice Axios para obtener los datos y manejarlos de manera similar a `fetch`.

// Evento para botón Axios
axiosBtn.addEventListener("click", () => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=Q4wbPS44eZHzlYRJWswhCS09RhfHAXKN0WiafAVS&start_date=2025-04-07&end_date=2025-04-22")
    .then(response => {
      renderData(response.data, 'axios-style');  // Pasa clase para estilo Axios
    })
    .catch(error => {
      console.error("Error:", error);
      dataContainer.textContent = "Hubo un error al obtener los datos.";
      dataContainer.className = 'error-style';
    });
});
