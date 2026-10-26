<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 5</title>
</head>
<body>

<form action="" method="post">
    <label for="numero">Digite um número de 1 a 8:</label>
    <input type="number" id="numero" name="numero" min="1" max="8" required>
    <button type="submit">Enviar</button>
</form>

<ul>
    <?php
        if (isset($_POST['numero'])) {
            $numero = (int) $_POST['numero'];
            $planetas = array(
                1 => "Mercúrio",
                2 => "Vênus",
                3 => "Terra",
                4 => "Marte",
                5 => "Júpiter",
                6 => "Saturno",
                7 => "Urano",
                8 => "Netuno"
            );
            if (array_key_exists($numero, $planetas)) {
                echo "<li>O planeta correspondente ao número $numero é: " . $planetas[$numero] . "</li>";
            } else {
                echo "<li>Número inválido. Por favor, digite um número de 1 a 8.</li>";
            }
        }
    ?>
</ul>

</body>
</html>