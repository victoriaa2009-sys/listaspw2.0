/*11 – Construa uma função que receba uma data no formato DD/MM/AAAA (string) e 
devolva uma string com a data por extenso, por exemplo: “doze de agosto de dois mil e 
vinte e quatro”. Seu algoritmo deve ser capaz de converter datas entre os anos de 2000 e 
2100.
*/

function dataPorExtenso(data) {
    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];      

    const partes = data.split("/");
    const dia = parseInt(partes[0]);
    const mes = parseInt(partes[1]) - 1; 
    const ano = parseInt(partes[2]);

    if (ano < 2000 || ano > 2100) {
        return "Ano fora do intervalo permitido (2000-2100).";
    }

    const diaPorExtenso = numeroPorExtenso(dia);
    const anoPorExtenso = numeroPorExtenso(ano);

    return `${diaPorExtenso} de ${meses[mes]} de ${anoPorExtenso}`;
}

function numeroPorExtenso(numero) {
    const unidades = [
        "", "um", "dois", "três", "quatro", "cinco",
        "seis", "sete", "oito", "nove"
    ];
    const dezenas = [
        "", "", "vinte", "trinta", "quarenta", "cinquenta",
        "sessenta", "setenta", "oitenta", "noventa"
    ];
    const especiais = [
        "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"
    ];

    if (numero < 10) {
        return unidades[numero];
    } else if (numero < 20) {
        return especiais[numero - 10];
    } else if (numero < 100) {
        const dezena = Math.floor(numero / 10);
        const unidade = numero % 10;
        return `${dezenas[dezena]}${unidade > 0 ? " e " + unidades[unidade] : ""}`;
    } else if (numero < 1000) {
        const centena = Math.floor(numero / 100);
        const resto = numero % 100;
        return `${centena === 1 ? "cem" : unidades[centena] + "cento"}${resto > 0 ? " e " + numeroPorExtenso(resto) : ""}`;
    } else {
        return "Número fora do intervalo suportado.";
    }
}

var dataInput = prompt("Digite uma data no formato DD/MM/AAAA:");
var resultado = dataPorExtenso(dataInput);
alert("Data por extenso: " + resultado);    