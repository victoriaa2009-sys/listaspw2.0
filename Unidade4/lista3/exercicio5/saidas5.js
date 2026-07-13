/*5 – Dado um array de números [23, 45, 67, 12, 89, 34], escreva um código que encontre e
exiba o maior número no array.
*/

var numeros = [23, 45, 67, 12, 89, 34];
var maiorNumero = numeros[0];

for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

console.log("O maior número é: ", maiorNumero);
