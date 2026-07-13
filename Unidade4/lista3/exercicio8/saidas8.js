/*8 – Faça um script que solicite ao usuário a quantidade de cidades que devem ser
cadastradas em um array. Em seguida, faça a leitura das cidades. Após ler todas as
cidades, diga qual foi a primeira cidade cadastrada e a última.
*/

var cidades = [];
var quantidadeCidades = parseInt(prompt("Digite a quantidade de cidades que você deseja cadastrar:"));

for (var i = 1; i <= quantidadeCidades; i++) {
    var cidade = prompt("Digite o nome da cidade " + i + ":");
    cidades.push(cidade);
}

cidades.forEach(function(cidade, index) {
    console.log("Cidade " + (index + 1) + ": " + cidade);
});

console.log("Primeira cidade cadastrada:", cidades[0]);
console.log("Última cidade cadastrada:", cidades[cidades.length - 1]);
