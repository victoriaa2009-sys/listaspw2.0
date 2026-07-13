/* Escreva um jogo do tipo batalha naval. Neste jogo, você competirá com o computador. A
base do jogo deverá ser um array de 10x10. O computador deverá sortear
automaticamente a posição das embarcações e a orientação (vertical ou horizontal). As
embarcações a serem utilizadas no jogo são:
Tipo Quantidade Embarcação no mapa
Porta Avião 1 P P P P P
Hidroavião 2
  H
H   H
Submarino 5 S
Cruzador 3 C C
Seu jogo deve apresentar a quantidade total de tiros, a quantidade de tiros certeiros e a
porcentagem de acertos. Também deve avisar ao jogador quando a partida terminou e dar
a possibilidade de iniciar uma nova partida.
Para que o jogador lance os tiros, o jogo deve perguntar o número da linha e da coluna
que deseja atirar.
*/

var mapa = [];
var tabuleiroJogador = [];

for (var i = 0; i < 10; i++) {

    mapa[i] = [];
    tabuleiroJogador[i] = [];

    for (var j = 0; j < 10; j++) {

        mapa[i][j] = " ";
        tabuleiroJogador[i][j] = "~";

    }
}


for (var i = 0; i < 5; i++) {
    mapa[0][i] = "P";
}


mapa[2][2] = "H";
mapa[2][4] = "H";
mapa[3][3] = "H";


mapa[5][5] = "H";
mapa[5][7] = "H";
mapa[6][6] = "H";


mapa[1][8] = "S";
mapa[3][8] = "S";
mapa[5][8] = "S";
mapa[7][8] = "S";
mapa[9][8] = "S";


mapa[8][1] = "C";
mapa[8][2] = "C";

mapa[8][4] = "C";
mapa[8][5] = "C";

mapa[8][7] = "C";
mapa[8][8] = "C";


var totalNavios = 22;

var tiros = 0;
var acertos = 0;


while (acertos < totalNavios) {

    console.clear();

    console.log("===== BATALHA NAVAL =====");
    console.log("");

    console.log("   0 1 2 3 4 5 6 7 8 9");

    for (var i = 0; i < 10; i++) {

        var textoLinha = i + " ";

        for (var j = 0; j < 10; j++) {
            textoLinha = textoLinha + " " + tabuleiroJogador[i][j];
        }

        console.log(textoLinha);
    }

    console.log("");
    console.log("Tiros: " + tiros);
    console.log("Acertos: " + acertos);
    console.log("");

    var linha = parseInt(prompt("Digite a linha (0 a 9):"));
    var coluna = parseInt(prompt("Digite a coluna (0 a 9):"));

    if (
        linha < 0 || linha > 9 ||
        coluna < 0 || coluna > 9
    ) {

        alert("Posição inválida!");
        continue;
    }

    if (
        tabuleiroJogador[linha][coluna] != "~"
    ) {

        alert("Você já atirou nessa posição!");
        continue;
    }

    tiros++;

    if (
        mapa[linha][coluna] == "P" ||
        mapa[linha][coluna] == "H" ||
        mapa[linha][coluna] == "S" ||
        mapa[linha][coluna] == "C"
    ) {

        tabuleiroJogador[linha][coluna] = mapa[linha][coluna];

        mapa[linha][coluna] = "X";

        acertos++;

        alert("ACERTOU!");

    } else {

        tabuleiroJogador[linha][coluna] = "O";

        alert("ÁGUA!");
    }
}


console.clear();

console.log("===== TABULEIRO FINAL =====");
console.log("");

console.log("   0 1 2 3 4 5 6 7 8 9");

for (var i = 0; i < 10; i++) {

    var textoLinha = i + " ";

    for (var j = 0; j < 10; j++) {
        textoLinha = textoLinha + " " + tabuleiroJogador[i][j];
    }

    console.log(textoLinha);
}

var porcentagem = (acertos * 100) / tiros;

alert("FIM DE JOGO!");
alert("Total de tiros: " + tiros);
alert("Total de acertos: " + acertos);
alert("Precisão: " + porcentagem.toFixed(2) + "%");