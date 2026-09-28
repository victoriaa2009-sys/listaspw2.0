<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 7 </title>
</head>
<body>
    <form action=" " method="POST">

        <label for="idade">Idade do espectador:</label>
        <input type="number" id="idade" name="idade">

        <button type="submit">Enviar</button>

    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $idade = $_POST["idade"];

        if ($idade < 10) {
            echo "Filmes com classificação 'Livre para todos os públicos'.";
        } else if ($idade >= 10 && $idade <= 13) {
            echo "Filmes com classificação de até '12 anos'.";
        } else if ($idade >= 14 && $idade <= 17) {
            echo "Filmes com classificação de até '16 anos'.";
        } else {
            echo "Filmes com classificação '18 anos' (adulto).";
        }
    }
    ?>
</body>
</html>
