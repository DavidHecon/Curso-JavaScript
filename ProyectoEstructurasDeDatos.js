let listaDeCompras = [];

// Función para agregar un producto
const agregarProducto = (producto) => {
  if (!listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    console.log(`${producto} agregado a la lista.`);
  } else {
    console.log(`${producto} ya está en la lista.`);
  }
};

//  Función para eliminar un producto
const eliminarProducto = (producto) => {
  const index = listaDeCompras.indexOf(producto);
  if (index !== -1) {
    listaDeCompras.splice(index, 1);
    console.log(`${producto} eliminado de la lista.`);
  } else {
    console.log(`${producto} no está en la lista.`);
  }
};

//  Función para mostrar la lista
const mostrarLista = () => {
  if (listaDeCompras.length === 0) {
    console.log("La lista de compras está vacía.");
  } else {
    console.log("Lista de compras:");
    listaDeCompras.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto}`);
    });
  }
};

//  Ejemplos de uso:
agregarProducto("Manzanas");
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Manzanas"); // Producto duplicado
mostrarLista();

eliminarProducto("Leche");
mostrarLista();
eliminarProducto("Huevos"); // Producto no encontrado
