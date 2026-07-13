/* 1 – Crie um script com uma função para calcular e retornar a média aritmética simples 
entre 3 notas. Seu programa deve solicitar 3 notas, chamar a função e exibir o resultado 
na tela.
*/

function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));


alert("A média das notas é: " + calcularMedia(nota1, nota2, nota3));
