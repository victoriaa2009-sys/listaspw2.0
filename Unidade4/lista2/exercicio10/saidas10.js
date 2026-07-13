/*10 – Implemente um algoritmo que exiba na tela os números pares de 0 até um número
digitado pelo usuário. Dica: você pode utilizar o operador módulo (%).
*/


var numero = parseInt(prompt("Digite um número:"));

if (numero > 0) {
    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            document.write(i, "<br>");
        }
    }
} else {
    for (let i = 1; i >= numero; i--) {
        if (i % 2 === 0) {
            document.write(i, "<br>");
        }
    }
}
