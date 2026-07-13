/*13 – Construa uma função que receba uma string como parâmetro e devolva (retorne) 
outra string com os caracteres embaralhados. Por exemplo: se função receber a palavra 
script, pode retornar tspcir, pritsc ou qualquer outra combinação possível, de forma 
aleatória. Padronize sua função para que todos os caracteres sejam devolvidos em caixa 
alta ou caixa baixa, independentemente de como foram digitados. 
*/

function embaralharString(str) {
    // Converte a string para caixa baixa
    str = str.toLowerCase();

    // Converte a string em um array de caracteres
    let arr = str.split('');

    // Embaralha o array usando o algoritmo de Fisher-Yates
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // Converte o array de volta para uma string e retorna
    return arr.join('');
}

// Solicita ao usuário que digite uma string
var inputString = prompt("Digite uma string para embaralhar:");

// Chama a função e exibe o resultado
var resultado = embaralharString(inputString);
alert("String embaralhada: " + resultado);  