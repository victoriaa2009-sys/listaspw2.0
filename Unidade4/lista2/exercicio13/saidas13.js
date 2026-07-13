/*13 – Implemente um programa para calcular sua média final em uma determinada
unidade curricular. O programa deve solicitar ao usuário a quantidade de notas, o valor
para cada uma das notas e exibir, ao final, a média aritmética simples e informar se o(a)
estudante está Aprovado ou Reprovado. Considere que a média mínima para a aprovação
é 6.
*/

var quantidadeNotas = parseInt(prompt("Digite a quantidade de notas que você possui:"));
var soma = 0;

for (let i = 1; i <= quantidadeNotas; i++) {
    var nota = parseFloat(prompt("Digite a nota " + i + ":"));
    soma += nota;
}

var media = soma / quantidadeNotas;
document.write("Sua Média é: ", media, "<br>");

if (media >= 6) {
    document.write("Situação: <p class='Aprovado'>Aprovado</p>");
} else {
    document.write("Situação: <p class='Reprovado'>Reprovado</p>");
}
