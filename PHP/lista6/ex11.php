<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 11</title>
</head>
<body>
    <form action=" " method="POST">
        <label for="mes">Mês de nascimento (1-12):</label>
        <input type="number" id="mes" name="mes" min="1" max="12">

        <label for="dia">Dia de nascimento (1-31):</label>
        <input type="number" id="dia" name="dia" min="1" max="31">

        <button type="submit">Enviar</button>

    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $mes = $_POST["mes"];
        $dia = $_POST["dia"];

        if (($mes == 3 && $dia >= 21) || ($mes == 4 && $dia <= 19)) {
            echo "Seu signo é Áries.";
        } else if (($mes == 4 && $dia >= 20) || ($mes == 5 && $dia <= 20)) {
            echo "Seu signo é Touro.";
        } else if (($mes == 5 && $dia >= 21) || ($mes == 6 && $dia <= 20)) {
            echo "Seu signo é Gêmeos.";
        } else if (($mes == 6 && $dia >= 21) || ($mes == 7 && $dia <= 22)) {
            echo "Seu signo é Câncer.";
        } else if (($mes == 7 && $dia >= 23) || ($mes == 8 && $dia <= 22)) {
            echo "Seu signo é Leão.";
        } else if (($mes == 8 && $dia >= 23) || ($mes == 9 && $dia <= 22)) {
            echo "Seu signo é Virgem.";
        } else if (($mes == 9 && $dia >= 23) || ($mes == 10 && $dia <= 22)) {
            echo "Seu signo é Libra.";
        } else if (($mes == 10 && $dia >= 23) || ($mes == 11 && $dia <= 21)) {
            echo "Seu signo é Escorpião.";
        } else if (($mes == 11 && $dia >= 22) || ($mes == 12 && $dia <= 21)) {
            echo "Seu signo é Sagitário.";
        } else if (($mes == 12 && $dia >= 22) || ($mes == 1 && $dia <= 19)) {
            echo "Seu signo é Capricórnio.";
        } else if (($mes == 1 && $dia >= 20) || ($mes == 2 && $dia <= 18)) {
            echo "Seu signo é Aquário.";
        } else {
            echo "Seu signo é Peixes.";
        }
    }
    ?>
</body>
</html>