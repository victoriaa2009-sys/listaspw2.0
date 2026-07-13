/*Desafio 2 - Inversão de Palavra
Escreva um programa que inverta uma palavra (pesquise por split()) inserida pelo
usuário utilizando uma estrutura de repetição.
*/
var palavra = prompt("Digite uma palavra:");
var palavraInvertida = "";
var letras = palavra.split("");

for (var i = letras.length - 1; i >= 0; i--) {
    palavraInvertida += letras[i];
}

alert("A palavra invertida é: " + palavraInvertida);
