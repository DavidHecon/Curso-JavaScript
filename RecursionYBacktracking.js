// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// Función recursiva para buscar un regalo en la lista
function findGift(gifts, giftName, index = 0) {
    // Caso base: Si llegamos al final de la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // Caso base: Si encontramos el regalo
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    // Llamada recursiva: continuar buscando en el siguiente índice
    return findGift(gifts, giftName, index + 1);
}

// Casos de ejemplo:
// Llamar a la función con diferentes regalos
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind)); // Salida esperada: "Lego está en la posición 3."

// Caso cuando el regalo no está en la lista
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind)); // Salida esperada: "Camión no está en la lista."
