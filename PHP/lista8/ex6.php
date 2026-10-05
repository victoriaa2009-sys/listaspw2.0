<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 6</title>
</head>
<body>
    <ul>
        <?php
            $bateria = 100;
            while ($bateria > 0) {
                echo "<li>Nível da bateria: $bateria%</li>";
                $bateria -= 20;
            }
            echo "<li>A bateria acabou!</li>";
        ?>
    </ul>
</body>
</html>