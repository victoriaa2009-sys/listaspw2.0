/*4 – Elabore um script com uma função que retorne se um dado número é par ou ímpar. 
Seu programa deve solicitar um número ao usuário, chamar a função e exibir o resultado 
na tela.
*/

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "O número " + numero + " é par.";
    } else {
        return "O número " + numero + " é ímpar.";
    }
}

var numero = parseInt(prompt("Digite um número:"));
alert(verificarParOuImpar(numero));
