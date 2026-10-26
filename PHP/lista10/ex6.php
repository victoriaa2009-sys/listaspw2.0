<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 6</title>
</head>
<body>

    <ul>
        <?php
            if (isset($_POST['num1']) && isset($_POST['num2']) && isset($_POST['operacao'])) {
                $num1 = (float) $_POST['num1'];
                $num2 = (float) $_POST['num2'];
                $operacao = $_POST['operacao'];
                switch ($operacao) {
                    case 'soma':
                        $resultado = $num1 + $num2;
                        echo "<li>O resultado da soma é: $resultado</li>";
                        break;
                    case 'subtracao':
                        $resultado = $num1 - $num2;
                        echo "<li>O resultado da subtração é: $resultado</li>";
                        break;
                    case 'multiplicacao':
                        $resultado = $num1 * $num2;
                        echo "<li>O resultado da multiplicação é: $resultado</li>";
                        break;
                    case 'divisao':
                        if ($num2 != 0) {
                            $resultado = $num1 / $num2;
                            echo "<li>O resultado da divisão é: $resultado</li>";
                        } else {
                            echo "<li>Erro: Divisão por zero não é permitida.</li>";
                        }
                        break;
                    default:
                        echo "<li>Operação inválida.</li>";
                }
            }
        ?>
    </ul>

</body>
</html>