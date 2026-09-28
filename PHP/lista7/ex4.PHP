<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 4</title>
</head>
<body>

    <h1>Condições Climáticas</h1>

    <form action="" method="POST">
        <label for="clima">Escolha uma condição climática:</label>
        <select id="clima" name="clima">
            <option value="nublado">Nublado</option>
            <option value="ensolarado">Ensolarado</option>
            <option value="chuvoso">Chuvoso</option>
            <option value="nevando">Nevando</option>
            <option value="tempestade">Tempestade</option>
        </select>
        <button type="submit">Enviar</button>
    </form>

    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $clima = $_POST["clima"];

            switch ($clima) {
                case "nublado":
                    echo "O dia está nublado.";
                    break;
                case "ensolarado":
                    echo "O dia está ensolarado.";
                    break;
                case "chuvoso":
                    echo "Leve um guarda-chuva!";
                    break;
                case "nevando":
                    echo "Está nevando. Fique aquecido!";
                    break;
                case "tempestade":
                    echo "Cuidado com a tempestade!";
                    break;
                default:
                    echo "Clima desconhecido.";
            }
        }
    ?>
</body>
</html>