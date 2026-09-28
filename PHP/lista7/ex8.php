<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 8</title>
</head>
<body>

    <h1>Avaliação de Desempenho</h1>

    <form action="" method="POST">
        <label for="pontuacao">Digite a pontuação (0 a 10):</label>
        <input type="number" id="pontuacao" name="pontuacao" min="0" max="10" required>
        <button type="submit">Enviar</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $pontuacao = $_POST["pontuacao"];

        switch ($pontuacao) {
            case 10:
                echo "Excelente!";
                break;
            case 8:
            case 9:
                echo "Muito bom!";
                break;
            case 6:
            case 7:
                echo "Bom, mas pode melhorar.";
                break;
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                echo "Reprovado.";
                break;
            default:
                echo "Pontuação inválida.";
        }
    }
    ?>
</body>
</html>