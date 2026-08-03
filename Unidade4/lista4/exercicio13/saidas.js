/*13 – Construa uma função que receba uma string como parâmetro e devolva (retorne) 
outra string com os caracteres embaralhados. Por exemplo: se função receber a palavra 
script, pode retornar tspcir, pritsc ou qualquer outra combinação possível, de forma 
aleatória. Padronize sua função para que todos os caracteres sejam devolvidos em caixa 
alta ou caixa baixa, independentemente de como foram digitados. 
*/

function embaralharTexto(texto) {
    texto = texto.toLowerCase();

    let letras = texto.split("");

    for (let i = 0; i < letras.length; i++) {
        let indiceAleatorio = Math.floor(Math.random() * letras.length);

        let temp = letras[i];
        letras[i] = letras[indiceAleatorio];
        letras[indiceAleatorio] = temp;
    }

    return letras.join("");
}
console.log(embaralharTexto(prompt("Digite um texto para embaralhar:")));