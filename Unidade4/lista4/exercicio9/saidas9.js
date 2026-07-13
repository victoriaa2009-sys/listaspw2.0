/*9 – Construa uma função que desenhe um retângulo usando os caracteres ‘+’ , ‘−’ e ‘|’ no 
console. Esta função deve receber dois parâmetros, linhas e colunas.
*/

function desenharRetangulo(linhas, colunas) {
    for (var i = 0; i < linhas; i++) {
        var linha = "";
        for (var j = 0; j < colunas; j++) {
            if (i === 0 || i === linhas - 1) {
                linha += "-";
            } else if (j === 0 || j === colunas - 1) {
                linha += "|";
            } else {
                linha += " ";
            }
        }
        console.log(linha);
    }
}

var linhas = parseInt(prompt("Digite o número de linhas do retângulo:"));
var colunas = parseInt(prompt("Digite o número de colunas do retângulo:"));

desenharRetangulo(linhas, colunas); 