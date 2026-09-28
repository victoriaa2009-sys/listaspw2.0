<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 5</title>
</head>
<body>
    <h1>Recomendação de Artista</h1>

    <form action="" method="POST">
        <label for="genero">Escolha um gênero musical:</label>
        <select id="genero" name="genero">
            <option value="rock">Rock</option>
            <option value="pop">Pop</option>
            <option value="jazz">Jazz</option>
            <option value="hip-hop">Hip-Hop</option>
            <option value="sertanejo">Sertanejo</option>
        </select>
        <input type="submit" value="Enviar">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $genero = $_POST["genero"];

        switch ($genero) {
            case "rock":
                echo "Artista recomendado: Queen.";
                break;
            case "pop":
                echo "Artista recomendado: AURORA.";
                break;
            case "jazz":
                echo "Artista recomendado: Miles Davis.";
                break;
            case "hip-hop":
                echo "Artista recomendado: Kendrick Lamar.";
                break;
            case "sertanejo":
                echo "Artista recomendado: Jorge & Mateus.";
                break;
            default:
                echo "Gênero musical inválido.";
        }
    }
    ?>
</body>
</html>