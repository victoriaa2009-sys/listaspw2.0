<?php
$temperatura = 15;

if ($temperatura < 10) {
    echo "Está muito frio! Use roupas quentes.";
} else if ($temperatura >= 10 && $temperatura <= 20) {
    echo "Frio. Vista-se bem!";
} else if ($temperatura >= 21 && $temperatura <= 25) {
    echo "Temperatura agradável.";
} else if ($temperatura >= 26 && $temperatura <= 30) {
    echo "Está ficando quente!";
} else {
    echo "Está muito quente! Fique hidratado.";
}
?>