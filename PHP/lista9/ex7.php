<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 7</title>
</head>
<body>
    <ul>
        <?php
            $galaxias = array(
                "Galáxia A" => "2 milhões de anos-luz",
                "Galáxia B" => "5 milhões de anos-luz",
                "Galáxia C" => "10 milhões de anos-luz"
            );

            foreach ($galaxias as $nome => $distancia) {
                echo "<li>$nome: $distancia</li>";
            }
        ?>
    </ul>
</body>
</html>