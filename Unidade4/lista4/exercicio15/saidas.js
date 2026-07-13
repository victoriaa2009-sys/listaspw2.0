/*15 – Quiz de Verdade ou Mentira: Crie uma função chamada verdadeOuMentira que 
receba uma frase e diga se ela é verdade ou mentira. Use uma lógica aleatória para 
definir o resultado.
Exemplos:
verdadeOuMentira("A Terra é plana"); // "Mentira!"
verdadeOuMentira("Javascript é uma linguagem de programação"); // "Verdade!"
*/

function verdadeOuMentira(frase) {
    const resultado = Math.random() < 0.5 ? "Verdade!" : "Mentira!";
    return resultado;
}

var fraseInput = prompt("Digite uma frase para verificar se é verdade ou mentira:");
alert(verdadeOuMentira(fraseInput));    