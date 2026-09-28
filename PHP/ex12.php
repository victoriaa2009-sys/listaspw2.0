<?php
$jogador1 = "pedra";
$jogador2 = "tesoura";

if ($jogador1 == $jogador2) {
    echo "Empate!";
} else if (($jogador1 == "pedra" && $jogador2 == "tesoura") || ($jogador1 == "tesoura" && $jogador2 == "papel") || ($jogador1 == "papel" && $jogador2 == "pedra")) {
    echo "Jogador 1 venceu!";
} else {
    echo "Jogador 2 venceu!";
}
?>