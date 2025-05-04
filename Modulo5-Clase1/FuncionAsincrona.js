/*Funcion asincrona*/

async function taskSlow(params) {
    console.log('Esta iniciando la tarea');
    /*se crea una promesa que se resolvera en tiempo n */
    await new Promise(resolve => {
        /*Simula que una tarea se esta tardando*/
        setTimeout(()=>{
            console.log('Tarea terminada en 5 segundos!!');
            /*Pasa o se llama cuando pasa el tiempo de espera */
            resolve()
        },5000)
    })
    console.log('Termino la tarea');
}

function taskFast(){
    console.log("Hola mundo! Se ejecuto primero");
}


taskSlow()
taskFast()