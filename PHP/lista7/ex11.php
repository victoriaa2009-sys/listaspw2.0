<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 6</title>
</head>
<body>

    <h1>Classificação de Horário</h1>

    <form action=" " method="POST">

        <label for="horario">Digite um horário (0 a 23):</label>
        <input type="number" id="horario" name="horario" min="0" max="23" required>

        <button type="submit">Enviar</button>
    </form> 
    
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $horario = $_POST["horario"];

        switch (true) {
            case $horario >= 5 && $horario <= 11:
                echo "São $horario horas. Bom dia!";
                break;
            case $horario >= 12 && $horario <= 17:
                echo "São $horario horas. Boa tarde!";
                break;
            case $horario >= 18 && $horario <= 21:
                echo "São $horario horas. Boa noite!";
                break;
            case $horario >= 22 || $horario <= 4:
                echo "São $horario horas. Você deveria estar dormindo!";
                break;
            default:
                echo "Horário inválido.";
        }
    }
    ?>
</body>
</html>