/*9 – Crie um script que solicite a quantidade de notas que um determinado estudante tem
em uma unidade curricular. Em seguida, diga qual é a maior nota, a menor nota e a média
aritmética simples do estudante. Utilize um array para armazenar todas as notas.
*/

var notas = [];
var quantidadeNotas = parseInt(prompt("Digite a quantidade de notas que você deseja registrar:"));

for (var i = 1; i <= quantidadeNotas; i++) {
    var nota = parseFloat(prompt("Digite a nota " + i + ":"));
    notas.push(nota);
}

for (var j = 0; j < notas.length; j++) {
    if (j === 0) {
        var maiorNota = notas[j];
        var menorNota = notas[j];
    } else {
        if (notas[j] > maiorNota) {
            maiorNota = notas[j];
        }
        if (notas[j] < menorNota) {
            menorNota = notas[j];
        }
    }
}

var soma = 0;
for (var k = 0; k < notas.length; k++) {
    soma += notas[k];
}
var media = soma / quantidadeNotas;

console.log("Maior nota:", maiorNota);
console.log("Menor nota:", menorNota);
console.log("Média aritmética simples:", media);        