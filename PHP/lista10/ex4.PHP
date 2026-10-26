<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 4</title>
</head>
<body>

<form action="" method="post">
    <label for="cep">Digite o CEP de destino:</label>
    <input type="text" id="cep" name="cep" required>
    <button type="submit">Calcular Frete</button>
</form>

<ul>
    <?php
        if (isset($_POST['cep'])) {
            $cep = htmlspecialchars($_POST['cep']);
            $frete = 0;

            switch ($cep) {
                case '88.123-456':
                    $frete = 10.00;
                    break;
                case '88.654-321':
                    $frete = 15.00;
                    break;
                case '88.987-654':
                    $frete = 20.00;
                    break;
                case '88.321-987':
                    $frete = 25.00;
                    break;
                default:
                    echo "<li>CEP não reconhecido.</li>";
            }

            if ($frete > 0) {
                echo "<li>O valor do frete para o CEP $cep é: R$$frete</li>";
            }
        }
    ?>
</ul>

</body>
</html>