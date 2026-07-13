/*Desafio 3 - Contagem de Vogais e Consoantes
Peça ao usuário para inserir uma frase e conte quantas vogais e consoantes existem
nela.
*/
var frase = prompt("Digite uma frase:");
var vogais = 0;
var consoantes = 0;
var letras = frase.split("");

for (var i = 0; i < letras.length; i++) {
    var letra = letras[i].toLowerCase();
    if (letra >= "a" && letra <= "z") {
        if ("aeiou".includes(letra)) {
            vogais++;
        } else {
            consoantes++;
        }
    }
}

alert("Vogais: " + vogais + "\nConsoantes: " + consoantes);