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
                if (isset($_GET['num1']) && isset($_GET['num2'])) {
                    $num1 = (float) $_GET['num1'];
                    $num2 = (float) $_GET['num2'];
                    $soma = $num1 + $num2;
                    echo "<li>A soma de $num1 e $num2 é: $soma</li>";
                }
            ?>
        </ul>

</body>
</html>