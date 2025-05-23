
const readline = require('readline');
const planetas = require('./planetas');

const interfaz = readline.createInterface({
//indica que la entrada (input) viene del teclado, es decir, lo que el usuario escribe en la terminal.
    input: process.stdin,
//indica que la salida (output) será mostrada en la terminal (la consola).
  output: process.stdout
});

console.log(chalk.blue("¡Bienvenido a la Exploración Espacial!"));
console.log(chalk.magenta("Puedes consultar información de los siguientes planetas:"));
planetas.forEach(p => console.log(chalk.green(`- ${p.nombre}`)));

interfaz.question('\n¿Sobre qué planeta quieres saber más? ', (respuesta) => {
  const planeta = planetas.find(p => p.nombre.toLowerCase() === respuesta.toLowerCase());
  
  if (planeta) {
    console.log(chalk.greenBright(`\n¡Planeta ${planeta.nombre} descubierto!`));
    console.log(chalk.yellow(`Descripción: ${planeta.descripcion}`));
    console.log(chalk.cyan(`Descubierto en: ${planeta.descubiertoEn}`));
  } else {
    console.log(chalk.red('\n¡Lo siento! No tenemos información de ese planeta.'));
  }

  interfaz.close();
});
