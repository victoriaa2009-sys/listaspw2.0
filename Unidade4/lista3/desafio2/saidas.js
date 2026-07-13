//
/*Desafio 2 – Jogo da Velha: Humano x Computador
Codifique um jogo da velha. Neste jogo, um jogador será humano (jogador 1, X) e o outro
jogador será o computador (jogador 2, O). As jogadas do computador devem ser
aleatórias e as do jogador humano devem ser solicitadas ao usuário. Utilize as demais
condições do desafio anterior para implementar o seu jogo. 
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

// Obtém entrada do usuário. Em browser usa prompt(), em Node usa readline.
function obterEntrada(mensagem) {
    if (typeof prompt === 'function') {
        return Promise.resolve(prompt(mensagem));
    } else {
        const readline = require('readline');
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        return new Promise(resolve => {
            rl.question(mensagem, answer => {
                rl.close();
                resolve(answer);
            });
        });
    }
}

async function jogar() {
    var jogadorAtual = "X";
    var vencedor = null;
    
    while (true) {
        exibirTabuleiro();
        
        if (jogadorAtual === "X") {
            // Jogador humano
            var linha, coluna;
            while (true) {
                var entradaLinha = await obterEntrada("Jogador " + jogadorAtual + ", digite a linha (0, 1 ou 2): ");
                var entradaColuna = await obterEntrada("Jogador " + jogadorAtual + ", digite a coluna (0, 1 ou 2): ");
                
                linha = parseInt(entradaLinha, 10);
                coluna = parseInt(entradaColuna, 10);
                
                if (!Number.isInteger(linha) || !Number.isInteger(coluna) || linha < 0 || linha > 2 || coluna < 0 || coluna > 2) {
                    console.log("Entrada inválida. Use 0, 1 ou 2.");
                    continue;
                }
                
                if (jogoDaVelha[linha][coluna] !== " ") {
                    console.log("Essa posição já está ocupada. Tente novamente.");
                    continue;
                }
                
                break;
            }
            
            jogoDaVelha[linha][coluna] = jogadorAtual;
        } else {
            // Jogada do computador (aleatória)
            var vazios = [];
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    if (jogoDaVelha[i][j] === " ") vazios.push([i, j]);
                }
            }
            
            if (vazios.length === 0) {
                break;
            }
            
            var escolha = vazios[Math.floor(Math.random() * vazios.length)];
            jogoDaVelha[escolha[0]][escolha[1]] = jogadorAtual;
            console.log("Computador jogou em " + escolha[0] + ", " + escolha[1] + ".");
        }
        
        vencedor = verificarVencedor();
        var empate = !jogoDaVelha.some(function(row) { return row.includes(" "); });
        
        if (vencedor || empate) {
            break;
        }
        
        jogadorAtual = (jogadorAtual === "X") ? "O" : "X";
    }
    
    exibirTabuleiro();
    if (vencedor) {
        console.log("Parabéns! O jogador " + vencedor + " venceu!");
    } else {
        console.log("Empate!");
    }
}

jogar().catch(function(err){ console.error(err); });