const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos de forma única

// Escucha el clic del botón para agregar un nuevo pedido
addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };  // Crear un nuevo pedido
    addOrder(order);  // Agregar el pedido a la lista visual
    processOrder(order);  // Procesar el pedido de forma asincrónica
});

// Función para agregar un pedido al contenedor visual
function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

// Función para actualizar el estado del pedido en la interfaz
function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

// Función asincrónica para procesar el pedido
async function processOrder(order) {
    // Simula un tiempo de preparación aleatorio entre 2 y 5 segundos
    const preparationTime = Math.floor(Math.random() * 3000) + 2000;

    // Actualiza el estado a 'En Proceso'
    updateOrderStatus(order, 'En Proceso');

    // Usamos setTimeout para simular el tiempo de preparación con Promise
    await new Promise(resolve => setTimeout(resolve, preparationTime));

    // Una vez que se ha cumplido el tiempo de preparación, actualiza el estado a 'Completado'
    updateOrderStatus(order, 'Completado');
}
