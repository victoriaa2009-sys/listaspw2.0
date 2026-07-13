/*7 – Crie um script que registrará as notas de um estudante. O script deve perguntar ao
usuário quantas notas devem ser digitadas e, em seguida, fazer a leitura das notas e, ao
final, exibir todas as notas digitadas no console.
*/

var notas = [];
var quantidadeNotas = parseInt(prompt("Digite a quantidade de notas que você deseja registrar:"));

for (var i = 1; i <= quantidadeNotas; i++) {
    var nota = parseFloat(prompt("Digite a nota " + i + ":"));
    notas.push(nota);
}

console.log("Notas registradas:", notas);
