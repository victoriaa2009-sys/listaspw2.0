<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 8</title>
</head>
<body>

    <ul>
        <?php
            for ($i = 1; $i <= 13; $i++) {
                if ($i % 2 == 0) {
                    echo "<li>Amostra $i: Vida encontrada</li>";
                } else {
                    echo "<li>Amostra $i: Vida não encontrada</li>";
                }
            }
        ?>
    </ul>
</body>
</html>