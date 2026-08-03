/*18 – Crie um script com uma função que retorna um valor em reais escrito por extenso. 
Por exemplo, caso seja passado “1.74” como parâmetro para a função, ela deve retornar: 
“um real e setenta e quatro centavos”. Caso seja passado “3251.90”, deve retornar “três 
mil duzentos e cinquenta e um reais e noventa centavos”.
*/

function numeroPorExtenso(valor) {
    const unidades = [
        "", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"
    ];
    const dezenas = [
        "", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"
    ];
    const centenas = [
        "", "cem", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"
    ];

    let [reais, centavos] = valor.toFixed(2).split(".");
    reais = parseInt(reais);
    centavos = parseInt(centavos);

    let reaisExtenso = "";
    if (reais > 0) {
        if (reais < 10) {
            reaisExtenso = unidades[reais];
        } else if (reais < 100) {
            reaisExtenso = dezenas[Math.floor(reais / 10)] + (reais % 10 > 0 ? " e " + unidades[reais % 10] : "");
        } else {
            reaisExtenso = centenas[Math.floor(reais / 100)] + (reais % 100 > 0 ? " e " + numeroPorExtenso(reais % 100) : "");
        }
        reaisExtenso += reais === 1 ? " real" : " reais";
    }

    let centavosExtenso = "";
    if (centavos > 0) {
        if (centavos < 10) {
            centavosExtenso = unidades[centavos];
        } else if (centavos < 100) {
            centavosExtenso = dezenas[Math.floor(centavos / 10)] + (centavos % 10 > 0 ? " e " + unidades[centavos % 10] : "");
        }
        centavosExtenso += centavos === 1 ? " centavo" : " centavos";
    }

    return reaisExtenso + (reais > 0 && centavos > 0 ? " e " : "") + centavosExtenso;
}

var valorInput = parseFloat(prompt("Digite um valor em reais (ex: 3251.90):"));
alert(numeroPorExtenso(valorInput));    