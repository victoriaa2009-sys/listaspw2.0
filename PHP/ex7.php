<?php
$idade = 15;

if ($idade < 10) {
    echo "Filmes com classificação 'Livre para todos os públicos'.";
} else if ($idade >= 10 && $idade < 14) {
    echo "Filmes com classificação de até '12 anos'.";
} else if ($idade >= 14 && $idade < 18) {
    echo "Filmes com classificação de até '16 anos'.";
} else {
    echo "Filmes com classificação '18 anos' (adulto).";
}
?>