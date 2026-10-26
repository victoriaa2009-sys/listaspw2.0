<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 1</title>
</head>
<body>
    <ul>
        <?php
            if (isset($_GET['nome'])) {
                $nome = htmlspecialchars($_GET['nome']);
                echo "<li>Olá, $nome! Seja bem-vindo!</li>";
            }
        ?>
    </ul>
</body>
</html>