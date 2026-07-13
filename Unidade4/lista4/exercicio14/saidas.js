/* 14 – Crie uma função chamada gerarHistoriaEngracada que receba três palavras (um 
nome, um lugar e um objeto) e gere uma história engraçada usando essas palavras.
Exemplo:
gerarHistoriaEngracada("João", "escola", "maça");
// "João foi para a escola, mas no caminho encontrou uma maça gigante que 
resolveu fazer amizade com ela!”
*/

function gerarHistoriaEngracada(nome, lugar, objeto) {
    return `${nome} foi para a ${lugar}, mas no caminho encontrou uma ${objeto} gigante que resolveu fazer amizade com ela!`;
}

var nomeInput = prompt("Digite um nome:");
var lugarInput = prompt("Digite um lugar:");
var objetoInput = prompt("Digite um objeto:");


alert(gerarHistoriaEngracada(nomeInput, lugarInput, objetoInput));