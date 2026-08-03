/*15 – Quiz de Verdade ou Mentira: Crie uma função chamada verdadeOuMentira que 
receba uma frase e diga se ela é verdade ou mentira. Use uma lógica aleatória para 
definir o resultado.
Exemplos:
verdadeOuMentira("A Terra é plana"); // "Mentira!"
verdadeOuMentira("Javascript é uma linguagem de programação"); // "Verdade!"
*/

function verdadeOuMentira(frase) {
    let sorteio = Math.floor(Math.random() * 2);
    if (sorteio === 0) {
        return "Mentira!";
    } else {
        return "Verdade!";
    }
}
var frase = prompt("Digite uma frase para verificar se é verdade ou mentira:");
alert(verdadeOuMentira(frase));
