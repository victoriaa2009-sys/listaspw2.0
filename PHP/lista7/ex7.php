<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 7</title>
</head>
<body>
    <h1>Calculadora Simples</h1>

    <form action="" method="POST">
        <label for="num1">Número 1:</label>
        <input type="number" id="num1" name="num1" required>

        <label for="num2">Número 2:</label>
        <input type="number" id="num2" name="num2" required>

        <label for="operacao">Operação:</label>
        <select id="operacao" name="operacao">
            <option value="1">Soma</option>
            <option value="2">Subtração</option>
            <option value="3">Multiplicação</option>
            <option value="4">Divisão</option>
        </select>

        <button type="submit">Calcular</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $num1 = $_POST["num1"];
        $num2 = $_POST["num2"];
        $operacao = $_POST["operacao"];

        switch ($operacao) {
            case 1:
                $resultado = $num1 + $num2;
                break;
            case 2:
                $resultado = $num1 - $num2;
                break;
            case 3:
                $resultado = $num1 * $num2;
                break;
            case 4:
                $resultado = $num2 != 0 ? $num1 / $num2 : "Divisão por zero não é permitida.";
                break;
            default:
                $resultado = "Operação inválida.";
        }

        echo "Resultado: " . $resultado;
    }
    ?>
</body>
</html>