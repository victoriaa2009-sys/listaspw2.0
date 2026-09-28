<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 10</title>
</head>
<body>
    <form action=" " method="POST">
        <label for="temperatura">Informe a temperatura do dia:</label>
        <input type="number" id="temperatura" name="temperatura">

        <button type="submit">Enviar</button>

    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $temperatura = $_POST["temperatura"];

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
    }
    ?>
</body>
</html>