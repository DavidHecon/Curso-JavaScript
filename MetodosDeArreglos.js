// Paso 1: Crear un arreglo de productos
const productos = [
    { nombre: "Camiseta", precio: 80, categoria: "Ropa" },
    { nombre: "Laptop", precio: 1500, categoria: "Electrónica" },
    { nombre: "Auriculares", precio: 200, categoria: "Electrónica" },
    { nombre: "Zapatos", precio: 120, categoria: "Ropa" },
    { nombre: "Taza", precio: 30, categoria: "Hogar" }
];

// Paso 2: Filtrar los productos que cuesten menos de $100
const productosFiltrados = productos.filter(producto => producto.precio < 100);
console.log("Productos que cuestan menos de $100:");
console.log(productosFiltrados);

// Paso 3: Ordenar los productos filtrados alfabéticamente por nombre
const productosOrdenados = productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("\nProductos ordenados alfabéticamente por nombre:");
console.log(productosOrdenados);

// Paso 4: Generar un arreglo con solo los nombres de los productos
const nombresProductos = productosOrdenados.map(producto => producto.nombre);
console.log("\nNombres de los productos ordenados:");
console.log(nombresProductos);

// Opcional: Usar reduce para calcular el total de los productos filtrados
const totalPrecio = productosFiltrados.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log("\nTotal del precio de los productos filtrados:");
console.log(totalPrecio);

// Opcional: Usar some para verificar si hay algún producto de la categoría "Electrónica"
const tieneElectronica = productos.some(producto => producto.categoria === "Electrónica");
console.log("\n¿Hay algún producto de la categoría 'Electrónica'?");
console.log(tieneElectronica);
