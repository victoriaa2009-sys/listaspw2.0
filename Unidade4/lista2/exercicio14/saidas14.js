/*Considere que você deseja fazer uma reserva mensal, em dinheiro, para a compra de um determinado presente para você mesmo(a). 
Considere que todo mês você depositará, em uma poupança no banco, um mesmo valor em reais. 
Faça um programa que leia o valor que será depositado mensalmente e exiba na tela em uma tabela o valor acumulado mês a mês durante 24 meses. 
Considere que a taxa de juros de uma poupança é 0,5% ao mês, que a poupança não possui nenhum saldo inicial.
Devem sair os seguintes resultados:
total investido: é o valor inicial + o valor mensal acumulados no período;
total ganho em juros: descontando-se o que foi investido, é o que é ganho em juros compostos;
total: a soma dos dois anteriores, ou seja, o saldo final.
*/

var valorMensal = parseFloat(prompt("Digite o valor que será depositado mensalmente:"));
var taxaJuros = 0.005; // 0,5% ao mês
var saldo = 0;

document.write("<table border='1'>");
document.write("<tr><th>Mês</th><th>Valor Acumulado</th></tr>");

for (let mes = 1; mes <= 24; mes++) {
    saldo += saldo * taxaJuros;
    saldo += valorMensal;
    document.write("<tr><td>" + mes + "</td><td class='valor'>R$ " + saldo.toFixed(2) + "</td></tr>");
}

document.write("</table>");

var totalInvestido = valorMensal * 24;
var totalGanhoJuros = saldo - totalInvestido;
var totalFinal = saldo;

document.write("<p>Total Investido: R$ " + totalInvestido.toFixed(2) + "</p>");
document.write("<p>Total Ganho em Juros: R$ " + totalGanhoJuros.toFixed(2) + "</p>");
document.write("<p>Total: R$ " + totalFinal.toFixed(2) + "</p>");   
