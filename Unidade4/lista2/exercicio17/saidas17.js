/*17 – Faça um programa para controlar o caixa de uma cantina. Seu programa deve solicitar ao usuário o código do produto pedido e a quantidade comprada. Suponha que
para cada compra, apenas um tipo de produto possa ser comprado. 
O programa deve ser interrompido caso o usuário digite 0. 
Para cada compra, seu programa deve exibir na tela o nome do produto comprado e o valor total da compra. Ao final do programa, 
deve exibir o valor total acumulado no caixa. Utilize a seguinte tabela de produtos como referência:
Código Produto Valor
1 Suco R$ 6,00
2 Pão de queijo R$ 3,00
3 Pastel R$ 7,00
4 Salada de frutas R$ 9,00
5 Café com leite R$ 3,50
6 Cappuccino R$ 4,50
7 Iogurte R$ 6,50
8 Água R$ 2,50
*/
var totalCaixa = 0;

while (true) {
    var codigoProduto = parseInt(prompt("Digite o código do produto (1 a 8) ou 0 para encerrar:"));
    
    if (codigoProduto === 0) {
        break;
    }
    var quantidade = parseInt(prompt("Digite a quantidade comprada:"));
    var valorProduto;
    var nomeProduto;
    
    switch (codigoProduto) {
        case 1:
            valorProduto = 6.00;
            nomeProduto = "Suco";
            break;
        case 2:
            valorProduto = 3.00;
            nomeProduto = "Pão de queijo";
            break;
        case 3:
            valorProduto = 7.00;
            nomeProduto = "Pastel";
            break;
        case 4:
            valorProduto = 9.00;
            nomeProduto = "Salada de frutas";
            break;
        case 5:
            valorProduto = 3.50;
            nomeProduto = "Café com leite";
            break;                          
        case 6:
            valorProduto = 4.50;
            nomeProduto = "Cappuccino";
            break;
        case 7:
            valorProduto = 6.50;
            nomeProduto = "Iogurte";
            break;
        case 8:
            valorProduto = 2.50;
            nomeProduto = "Água";
            break;
        default:
            alert("Código de produto inválido. Tente novamente.");
            continue; // Volta para o início do loop
    }
    var valorTotalCompra = valorProduto * quantidade;
    totalCaixa += valorTotalCompra;
    
    document.write("<p>Produto: " + nomeProduto + " | Quantidade: " + quantidade + " | Valor Total: R$ " + valorTotalCompra.toFixed(2) + "</p>");
}

document.write("<h3>Valor total acumulado no caixa: R$ " + totalCaixa.toFixed(2) + "</h3>");
