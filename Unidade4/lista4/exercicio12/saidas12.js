/*12 – Rifa Virtual: Crie uma função chamada sortearGanhador que receba uma lista de 
nomes e sorteie aleatoriamente um ganhador. Para lhe auxiliar nesse exercício, pesquise 
sobre geração de números aleatórios em JavaScript (você deve encontrar exemplos com 
Math.floor() e Math.random()).
Exemplo:
sortearGanhador(["Lucas", "Ana", "Pedro", "Marina"]); // "O ganhador é Ana!"
*/

function sortearGanhador(nomes) {
    if (nomes.length === 0) {
        return "A lista de nomes está vazia.";
    }
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const ganhador = nomes[indiceSorteado];
    return `O ganhador é ${ganhador}!`;
}

var listaNomes = ["Lucas", "Ana", "Pedro", "Marina"];

alert(sortearGanhador(listaNomes));
