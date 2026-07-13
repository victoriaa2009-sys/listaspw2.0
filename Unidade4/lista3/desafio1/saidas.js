/*Desafio 1 – Jogo da Velha: Humano x Humano
Implemente um jogo da velha. Neste jogo, os dois jogadores serão humanos. O jogador 1
será sempre o X e o jogador 2 será sempre o O (letra Ó). O jogo deve possuir um array
de 3x3 de caracteres e deve solicitar ao jogador qual linha e coluna deseja jogar. Seu jogo
também deve ser capaz de informar quando uma partida foi finalizada e quem é o
ganhador da partida (jogador X ou O) ou se deu velha(empate). Sempre que um novo jogo for iniciado, você deve
inicializar todos os elementos da matriz com um espaço em branco (" "). O espaço em
branco representa a ausência de jogada no elemento. Veja um exemplo de como você
pode exibir seu jogo no console:
*/

var jogoDaVelha = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

function exibirTabuleiro() {
    console.log("  0 1 2");
    for (var i = 0; i < jogoDaVelha.length; i++) {
        console.log(i + " " + jogoDaVelha[i].join(" "));
    }
}

function verificarVencedor() {
    // Verificar linhas
    for (var i = 0; i < jogoDaVelha.length; i++) {
        if (jogoDaVelha[i][0] !== " " && jogoDaVelha[i][0] === jogoDaVelha[i][1] && jogoDaVelha[i][1] === jogoDaVelha[i][2]) {
            return jogoDaVelha[i][0];
        }
    }
    
    // Verificar colunas
    for (var j = 0; j < jogoDaVelha[0].length; j++) {
        if (jogoDaVelha[0][j] !== " " && jogoDaVelha[0][j] === jogoDaVelha[1][j] && jogoDaVelha[1][j] === jogoDaVelha[2][j]) {
            return jogoDaVelha[0][j];
        }
    }
    
    // Verificar diagonais
    if (jogoDaVelha[0][0] !== " " && jogoDaVelha[0][0] === jogoDaVelha[1][1] && jogoDaVelha[1][1] === jogoDaVelha[2][2]) {
        return jogoDaVelha[0][0];
    }
    
    if (jogoDaVelha[0][2] !== " " && jogoDaVelha[0][2] === jogoDaVelha[1][1] && jogoDaVelha[1][1] === jogoDaVelha[2][0]) {
        return jogoDaVelha[0][2];
    }
    
    return null;
}

function jogar() {
    var jogadorAtual = "X";
    var vencedor = null;
    
    while (!vencedor) {
        exibirTabuleiro();
        var linha = parseInt(prompt("Jogador " + jogadorAtual + ", digite a linha (0, 1 ou 2):"));
        var coluna = parseInt(prompt("Jogador " + jogadorAtual + ", digite a coluna (0, 1 ou 2):"));
        
        if (jogoDaVelha[linha][coluna] === " ") {
            jogoDaVelha[linha][coluna] = jogadorAtual;
            vencedor = verificarVencedor();
            jogadorAtual = (jogadorAtual === "X") ? "O" : "X";
        } else {
            console.log("Essa posição já está ocupada. Tente novamente.");
        }
    }

    exibirTabuleiro();
    if (vencedor) {
        console.log("Parabéns! O jogador " + vencedor + " venceu!");
    } else {
        console.log("Empate!");
    }
}

jogar();
