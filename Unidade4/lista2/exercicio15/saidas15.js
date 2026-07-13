/*15 – Suponha que você recebeu a última fatura do seu cartão de crédito no valor de R$
1.000,00 e que você não possa pagá-la. Faça um programa que calcule sua dívida total
com o banco depois de uma quantidade de meses informada durante a execução do
programa. Considere que a taxa de juros mensal de um cartão de crédito é de 15,30% ao
mês.
A título de curiosidade, simule sua dívida final no prazo de 2 anos (24 meses).
*/

var valorFatura = 1000; // Valor da fatura do cartão de crédito
var taxaJuros = 0.153; // 15,30% ao mês
var meses = parseInt(prompt("Digite a quantidade de meses para simular a dívida:"));
var saldoDevedor = valorFatura;

document.write("<table border='1'>");
document.write("<tr><th>Mês</th><th>Valor da Dívida</th></tr>");

for (let mes = 1; mes <= meses; mes++) {
    saldoDevedor += saldoDevedor * taxaJuros;
    document.write("<tr><td>" + mes + "</td><td class='valor'>R$ " + saldoDevedor.toFixed(2) + "</td></tr>");
}

document.write("</table>");

var totalFinal = saldoDevedor;

document.write("<p>Sua dívida começou com R$ <span class='valor'>" + valorFatura.toFixed(2) +
    "</span> e após " + meses + " meses, sua dívida total é de <span class='valor'>R$ " + totalFinal.toFixed(2) + "</span>.</p>");

