/*4 – Crie um array chamado numeros que contenha os números pares de 2 a 20. Percorra
o array usando um loop for e exiba cada número no console.
*/

var numeros = [];
for (var i = 2; i <= 20; i += 2) {
    numeros.push(i);
}
for (var j = 0; j < numeros.length; j++) {
    console.log(numeros[j]);
}
