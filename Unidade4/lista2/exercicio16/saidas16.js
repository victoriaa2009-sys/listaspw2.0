/*16 – Escreva um programa que leia números inteiros do teclado. O programa deve ler os
números até que o usuário digite 0 (zero). No final da execução, exiba a quantidade de
números digitados, assim como a soma e a média aritmética.
*/
var quantidade = 0;
var soma = 0;
var media = 0;

while (true) {
    var numero = parseInt(prompt("Digite um número inteiro (0 para sair):"));
    if (numero === 0) {
        break;
    }
    quantidade++;
    soma += numero;
}

if (quantidade > 0) {
    media = soma / quantidade;
}

document.write("<p>Quantidade de números digitados: " + quantidade + "</p>");
document.write("<p>Soma dos números digitados: " + soma + "</p>");
document.write("<p>Média dos números digitados: " + media + "</p>");

