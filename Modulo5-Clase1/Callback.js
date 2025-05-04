function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}`);
    callback();
}

saludar('María', () => {
    console.log('Callback ejecutado.');
});


/*Callback con simulación de carga con setTimeout*/

function inicioSesion(login, callback){
    console.log(`Hola, ${login}`);
    setTimeout(()=>{
        callback();
    },2000);
}

inicioSesion('Se esta procesando su solicitud', ()=>{
    console.log('Bienvenido');
    
})

/*Otro ejemplo simulando login*/
function inicioSesion(nombre, callback){
    console.log('Iniciando sesion');
    setTimeout(()=>{
        callback(nombre);
    },2000);
}

inicioSesion('David', (nombre)=>{
    console.log(`Bienvenido ${nombre}` );
    
})