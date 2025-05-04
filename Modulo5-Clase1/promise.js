const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa cumplida'), 1000);
});

promesa.then(texto => console.log(texto));



/*¿Cómo sabes que resultado contiene lo que tiene resolve?

    Comportamiento interno de las promesas: Cuando usas .then(), el motor de JavaScript garantiza que el argumento que pases a resolve será el argumento de la función en .then(). Es una característica inherente de las promesas.

    El flujo de datos:

        resolve(valor) es quien "cumple" la promesa.

        Ese valor viaja automáticamente al siguiente .then().

Ejemplo demostrativo:

Puedes comprobarlo fácilmente pasando diferentes valores a resolve:

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve(42), 1000); // Aquí se pasa el número 42 a resolve
});

promesa.then(resultado => {
    console.log(resultado); // Verás 42*/



    function inicioSesion(nombre) {
        return new Promise((resolve, reject) => {
            console.log("Procesando inicio de sesión...");
            setTimeout(() => {
                if (nombre) {
                    resolve(`Bienvenido, ${nombre}`);
                } else {
                    reject("Error: Nombre no proporcionado");
                }
            }, 2000);
        });
    }
    
    // Usamos la Promise
    inicioSesion("David")
        .then((mensaje) => {
            console.log(mensaje);
        })
        .catch((error) => {
            console.error(error);
        });
    