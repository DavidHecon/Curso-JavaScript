function encontrarPalabraMasLarga(texto) {
    const palabras = texto.split(' '); // Divide el texto por espacios
    let longestWord = ''; // Inicializamos con una cadena vacía
  
    for (let i = 0; i < palabras.length; i++) {
      const palabraActual = palabras[i];
  
      if (palabraActual.length > longestWord.length) {
        longestWord = palabraActual; // Actualiza si la palabra actual es más larga
      }
    }
  
    return longestWord;
  }
  
  // Ejemplo 
  const parrafo = "La programación es una habilidad fundamental en el mundo actual";
  const resultado = encontrarPalabraMasLarga(parrafo);
  console.log("La palabra más larga es:", resultado);
  