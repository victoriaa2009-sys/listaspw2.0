<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 3</title>
</head>
<body>
    <h1>Escolha uma música para tocar</h1>

    <form action="" method="POST">
        <label for="musica">Escolha um gênero (1 a 4):</label>
        <select id="musica" name="musica">
            <option value="1">Rock</option>
            <option value="2">Pop</option>
            <option value="3">Sertanejo</option>
            <option value="4">Eletrônica</option>
        </select>
        <input type="submit" value="Enviar">
    </form>
    
    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $musica = $_POST["musica"];

            switch ($musica) {
                case 1:
                    echo "Você escolheu Rock. Tocando 'Back in Black'!";
                    break;
                case 2:
                    echo "Você escolheu Pop. Tocando 'To Be Alright'!";
                    break;
                case 3:
                    echo "Você escolheu Sertanejo. Tocando 'Evidências'!";
                    break;
                case 4:
                    echo "Você escolheu Eletrônica. Tocando 'Heroine'!";
                    break;
                default:
                    echo "Gênero inválido.";
            }
        }
    ?>
</body>
</html>