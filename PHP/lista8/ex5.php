<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 5</title>
</head>
<body>
    <ul>
        <?php
            for ($i = 1; $i <= 20; $i++) {
                if ($i == 15) {
                    echo "<li>Coordenada $i: Tesouro encontrado!</li>";
                } else {
                    echo "<li>Coordenada $i</li>";
                }
            }
        ?>
    </ul>
</body>
</html>