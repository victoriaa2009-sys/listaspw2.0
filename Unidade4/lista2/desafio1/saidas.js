/*Desafio 1 - Jogo de Adivinhação
Crie um jogo onde o computador escolhe um número aleatório de 1 a 100 (pesquise por
Math.random()) e o jogador tem que adivinhar. O programa deve dar dicas de "maior" ou
"menor" até que o número seja adivinhado.
*/
var numeroSecreto = Math.floor(Math.random() * 100) + 1;
var tentativas = 0;
var maxTentativas = 10;

while (tentativas < maxTentativas) {
    var palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
    tentativas++;

    if (palpite === numeroSecreto) {
        alert("Parabéns! Você adivinhou o número em " + tentativas + " tentativas.");
        break;
    } else if (palpite < numeroSecreto) {
        alert("O número é maior. Tente novamente.");
    } else {
        alert("O número é menor. Tente novamente.");
    }
}

if (tentativas === maxTentativas) {
    alert("Fim de jogo! O número secreto era: " + numeroSecreto + "");
}