<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 1</title>
</head>
<body>

    <h1>Menu de Refeições</h1>
    <ul>
        <li>1: Hambúrguer</li>
        <li>2: Pizza</li>
        <li>3: Sushi</li>
    </ul>

    <h2>Resultado</h2>
    <p>

    <form action="" method="POST">
        <label for="opcao">Escolha uma opção (1, 2 ou 3):</label>
        <input type="number" id="opcao" name="opcao" min="1" max="3">
        <input type="submit" value="Enviar">
    </form>

    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $opcao = $_POST["opcao"];

            switch ($opcao) {
                case 1:
                    echo "Você escolheu Hambúrguer.";
                    break;
                case 2:
                    echo "Você escolheu Pizza.";
                    break;
            case 3:
                echo "Você escolheu Sushi.";
                break;
            default:
                echo "Opção inválida.";
            }
        }
    ?>
</body>
</html>