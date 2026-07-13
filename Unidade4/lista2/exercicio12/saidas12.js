/*12 - Modifique o programa anterior de forma que o usuário também digite o início e o fim
da tabuada, em vez de começar com 1 e 10.
*/
var num= parseInt(prompt("Digite um número para vermos sua tabuada:"));
var inicio = parseInt(prompt("Digite o início da tabuada:"));
var fim = parseInt(prompt("Digite o fim da tabuada:"));

for (let i = inicio; i <= fim; i++) {
    document.write(num, " x ", i, " = ", (num * i), "<br>");
}
