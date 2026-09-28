<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 10</title>
</head>
<body>

    <h1>Calculadora de IMC</h1>

    <form action=" " method="POST">

        <label for="peso">Peso (kg):</label>
        <input type="number" id="peso" name="peso" step="0.1" required>

        <label for="altura">Altura (m):</label>
        <input type="number" id="altura" name="altura" step="0.01" required>

        <button type="submit">Calcular IMC</button>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $peso = $_POST["peso"];
        $altura = $_POST["altura"];
        $imc = $peso / ($altura * $altura);

        switch (true) {
            case $imc < 18.5:
                echo "Classificação: Abaixo do peso";
                break;
            case $imc >= 18.5 && $imc < 24.9:
                echo "Classificação: Peso normal";
                break;
            case $imc >= 25 && $imc < 29.9:
                echo "Classificação: Sobrepeso";
                break;
            case $imc >= 30:
                echo "Classificação: Obesidade";
                break;
            default:
                echo "IMC inválido.";
        }
    }
    ?>
</body>
</html>