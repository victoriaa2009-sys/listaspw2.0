/*17 – Gerador de Apelidos para Jogos: Crie uma função chamada gerarNomeDeJogador 
que receba um nome e adicione números e símbolos aleatórios no final, como os apelidos 
em jogos online.
Exemplo:
gerarNomeDeJogador("Lucas"); // "Lucas_99xX"
*/

function gerarNomeDeJogador(nome) {
    const numeros = Math.floor(Math.random() * 100); 
    const simbolos = ["_", "-", "xX", "Xx", "!", "@", "#", "$"];
    const simboloAleatorio = simbolos[Math.floor(Math.random() * simbolos.length)];
    
    return nome + numeroAleatorio + simboloAleatorio;
}

var nomeInput = prompt("Digite um nome:");
alert(gerarNomeDeJogador(nomeInput));   