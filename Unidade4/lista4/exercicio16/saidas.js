/*16 – Criador de Super-Heróis: Crie uma função chamada criarSuperHeroi que receba o 
nome de uma pessoa e gere um nome de super-herói combinando uma palavra de poder 
e um animal aleatório.
Exemplo:criarSuperHeroi("Carlos"); // "Carlos, o Invencível Tigre"
*/

function criarSuperHeroi(nome) {
    const palavrasDePoder = ["Invencível", "Incrível", "Poderoso", "Rápido", "Forte"];
    const animais = ["Tigre", "Águia", "Leão", "Pantera", "Lobo"];
    
    const palavraAleatoria = palavrasDePoder[Math.floor(Math.random() * palavrasDePoder.length)];
    const animalAleatorio = animais[Math.floor(Math.random() * animais.length)];
    
    return `${nome}, o ${palavraAleatoria} ${animalAleatorio}`;
}

var nomeInput = prompt("Digite o nome de uma pessoa:");
alert(criarSuperHeroi(nomeInput));