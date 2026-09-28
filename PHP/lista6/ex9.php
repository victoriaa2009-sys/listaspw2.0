<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 9</title>
</head>
<body>
    <form action=" " method="POST">
        <label for="superpoder">Escolha seu superpoder:</label>
        <select id="superpoder" name="superpoder">
            <option value="força">Força</option>
            <option value="velocidade">Velocidade</option>
            <option value="voo">Voo</option>
        </select>

        <button type="submit">Enviar</button>

    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $superpoder = $_POST["superpoder"];

        if ($superpoder == "força") {
            echo "Você seria o Hulk!";
        } else if ($superpoder == "velocidade") {
            echo "Você seria o Flash!";
        } else if ($superpoder == "voo") {
            echo "Você seria o Superman!";
        }
    }
    ?>
</body>
</html>