<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 2</title>
</head>
<body>
    <ul>
        <?php
            $pontos = array(10, 20, 30, 40, 50);
            $total = 0;
            foreach ($pontos as $ponto) {
                echo "<li>Pontuação do nível: $ponto</li>";
                $total += $ponto;
            }
            echo "<li>Total de pontos: $total</li>";
        ?>
    </ul>
</body>
</html>