<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 3</title>
</head>
<body>

<form action="" method="post">
    <label for="idade">Digite sua idade:</label>
    <input type="number" id="idade" name="idade" required>
    <button type="submit">Enviar</button>
</form>

<ul>
    <?php
        if (isset($_POST['idade'])) {
            $idade = (int) $_POST['idade'];
            if ($idade >= 18) {
                echo "<li>Você é maior de idade.</li>";
            } else {
                echo "<li>Você é menor de idade.</li>";
            }
        }
    ?>
</ul>

</body>
</html>