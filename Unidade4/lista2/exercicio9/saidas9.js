/*9 – Faça um programa que exiba na tela a contagem iniciando no número 1 e indo até um
número informado pelo usuário. Considere que a contagem pode ser até um número
positivo ou até um número negativo.
*/


var numero = parseInt(prompt("Digite um número:"));

if (numero > 0) {
    for (let i = 1; i <= numero; i++) {
        document.write(i, "<br>");
    }
} else {
    for (let i = 1; i >= numero; i--) {
        document.write(i, "<br>");
    }
}
