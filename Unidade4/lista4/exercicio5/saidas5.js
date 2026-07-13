/*5 – Tradutor de Gírias de Internet: Crie uma função chamada traduzirGiria que receba 
uma frase com gírias da internet e substitua algumas palavras comuns por gírias 
populares. Pesquise sobre a função replace() em JavaScript. Aqui há uma explicação 
sobre o replace(): https://www.devmedia.com.br/javascript-replace-substituindo-valores
em-uma-string/39176 
Exemplo:
traduzirGiria("Estou muito feliz hoje"); // "Tô mt felizona hoje"
*/

function traduzirGiria(frase) {
    var gírias = {
        "estou": "tô",
        "muito": "mt",
        "feliz": "felizona",
        "hoje": "hj",
        "legal": "da hora",
        "dinheiro": "grana"
    };

    for (var palavra in gírias) {
        var regex = new RegExp("\\b" + palavra + "\\b", "gi");
        frase = frase.replace(regex, gírias[palavra]);
    }

    return frase;
}

var fraseOriginal = prompt("Digite uma frase com gírias da internet:");

alert("Frase traduzida: " + traduzirGiria(fraseOriginal));    