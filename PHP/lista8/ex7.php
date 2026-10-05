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
            for ($i = 1; $i <= 15; $i++) {
                if ($i == 7) {
                    echo "<li>Alienígena $i: Alienígena especial chegou!</li>";
                } else {
                    echo "<li>Alienígena $i</li>";
                }
            }
        ?>
    </ul>
</body>
</html>