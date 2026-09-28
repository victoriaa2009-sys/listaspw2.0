<?php
$mês = 3; 
$dia = 25;

if (($mês == 3 && $dia >= 21) || ($mês == 4 && $dia <= 19)) {
    echo "Seu signo é Áries.";
} else if (($mês == 4 && $dia >= 20) || ($mês == 5 && $dia <= 20)) {
    echo "Seu signo é Touro.";
} else if (($mês == 5 && $dia >= 21) || ($mês == 6 && $dia <= 20)) {
    echo "Seu signo é Gêmeos.";
} else if (($mês == 6 && $dia >= 21) || ($mês == 7 && $dia <= 22)) {
    echo "Seu signo é Câncer.";
} else if (($mês == 7 && $dia >= 23) || ($mês == 8 && $dia <= 22)) {
    echo "Seu signo é Leão.";
} else if (($mês == 8 && $dia >= 23) || ($mês == 9 && $dia <= 22)) {
    echo "Seu signo é Virgem.";
} else if (($mês == 9 && $dia >= 23) || ($mês == 10 && $dia <= 22)) {
    echo "Seu signo é Libra.";
} else if (($mês == 10 && $dia >= 23) || ($mês == 11 && $dia <= 21)) {
    echo "Seu signo é Escorpião.";
} else if (($mês == 11 && $dia >= 22) || ($mês == 12 && $dia <= 21)) {
    echo "Seu signo é Sagitário.";
} else if (($mês == 12 && $dia >= 22) || ($mês == 1 && $dia <= 19)) {
    echo "Seu signo é Capricórnio.";
} else if (($mês == 1 && $dia >= 20) || ($mês == 2 && $dia <= 18)) {
    echo "Seu signo é Aquário.";
} else {
    echo "Seu signo é Peixes.";
}
?>