/*5 – Tradutor de Gírias de Internet: Crie uma função chamada traduzirGiria que receba 
uma frase com gírias da internet e substitua algumas palavras comuns por gírias 
populares. Pesquise sobre a função replace() em JavaScript. Aqui há uma explicação 
sobre o replace(): https://www.devmedia.com.br/javascript-replace-substituindo-valores
em-uma-string/39176 
Exemplo:
traduzirGiria("Estou muito feliz hoje"); // "Tô mt felizona hoje"
*/

function traduzirGiria(frase) {
    frase = frase.replace("estou", "Tô");
    frase = frase.replace("muito", "mt");
    frase = frase.replace("feliz", "felizona");
    return frase;
}

frase = prompt("Digite uma frase:");
const fraseTraduzida = traduzirGiria(frase);
alert("Frase traduzida: " + fraseTraduzida);