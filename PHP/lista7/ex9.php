<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 9</title>
</head>
<body>

    <h1>Classificação Etária</h1>

    <form action="" method="POST">
        <label for="idade">Digite a idade:</label>
        <input type="number" id="idade" name="idade" required>
        <button type="submit">Enviar</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $idade = $_POST["idade"];

        switch (true) {
            case $idade < 13:
                echo "Classificação: Criança";
                break;
            case $idade >= 13 && $idade < 18:
                echo "Classificação: Adolescente";
                break;
            case $idade >= 18 && $idade < 65:
                echo "Classificação: Adulto";
                break;
            case $idade >= 65:
                echo "Classificação: Idoso";
                break;
            default:
                echo "Idade inválida.";
        }
    }
    ?>
</body>
</html>
