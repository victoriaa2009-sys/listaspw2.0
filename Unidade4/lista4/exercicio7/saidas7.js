/*7 – Desenvolva um script com uma função que receba uma array numérico e retorne o 
resultado da soma de todos os elementos dele (percorrendo o array). Deve-se solicitar 4 
números ao usuário, chamar a função e exibir o resultado da soma na tela.
*/

function somarElementos(array) {
    var soma = 0;
    for (var i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

var numeros = [];
for (var j = 1; j <= 4; j++) {
    var numero = parseFloat(prompt("Digite o número " + j + ":"));
    numeros.push(numero);
}

alert("A soma dos elementos do array é: " + somarElementos(numeros)); 