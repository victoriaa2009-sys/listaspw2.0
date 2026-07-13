/*6 – Dado o array numeros do exercício 4, escreva um código que calcule a soma de
todos os elementos do array.
*/

var numeros = [];
for (var i = 2; i <= 20; i += 2) {
    numeros.push(i);
}
var soma = 0;
for (var j = 0; j < numeros.length; j++) {
    soma += numeros[j];
}
console.log("A soma dos números é:", soma);
