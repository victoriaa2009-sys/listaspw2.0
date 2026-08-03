/* 2 – Máquina do Tempo de Idades: Crie uma função chamada calcularIdadeNoFuturo que 
receba o nome e a idade atual de uma pessoa, e calcule qual será a idade dela daqui a X 
anos.
Exemplo: 
calcularIdadeNoFuturo("Maria", 17, 10); // "Maria terá 27 anos daqui a 10 anos!"
*/

function calcularIdadeNoFuturo(nome, idadeAtual, anosFuturos) {
    var idadeFutura = idadeAtual + anosFuturos;
    return nome + " terá " + idadeFutura + " anos daqui a " + anosFuturos + " anos";
}

var nome = prompt("Digite o nome da pessoa:");
var idadeAtual = parseInt(prompt("Digite a idade atual da pessoa:"));
var anosFuturos = parseInt(prompt("Digite quantos anos no futuro deseja calcular:"));

alert(calcularIdadeNoFuturo(nome, idadeAtual, anosFuturos));

