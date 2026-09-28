<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 2</title>
</head>
<body>

    <h1>Dia da Semana</h1>  

    <form action="" method="POST">
        <label for="numero">Digite um número de 1 a 7:</label>
        <input type="number" id="numero" name="numero" min="1" max="7">
        <input type="submit" value="Enviar">
    </form>
    
    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $numero = $_POST["numero"];

            switch ($numero) {
                case 1:
                    echo "1: Segunda-feira";
                    break;
                case 2:
                    echo "2: Terça-feira";
                    break;
                case 3:
                    echo "3: Quarta-feira";
                    break;
                case 4:
                    echo "4: Quinta-feira";
                    break;
                case 5:
                    echo "5: Sexta-feira";
                    break;
                case 6:
                    echo "6: Sábado";
                    break;
                case 7:
                    echo "7: Domingo";
                    break;
                default:
                    echo "Número inválido.";
            }
        }
    ?>
</body>
</html>