<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 6</title>
</head>
<body>

    <form action=" " method="POST">

        <label for="valor">Valor da compra:</label>
        <input type="number" id="valor" name="valor">

        <button type="submit">Enviar</button>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $valor = $_POST["valor"];

        if ($valor >= 100) {
            echo "Você ganhou um cupom de desconto!";
        } else {
            echo "Continue comprando para ganhar um cupom de desconto!";
        }
    }
    ?>
</body>
</html>
