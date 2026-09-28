<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 6</title>
</head>
<body>
    <H1>Simulador de Conversa</H1>

    <form action="" method="POST">
        <label for="emocao">Como você está se sentindo hoje?</label>
        <select id="emocao" name="emocao">
            <option value="feliz">Feliz</option>
            <option value="triste">Triste</option>
            <option value="nervoso">Nervoso</option>
            <option value="cansado">Cansado</option>
            <option value="entediado">Entediado</option>
        </select>
        <button type="submit">Enviar</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $emocao = $_POST["emocao"];

        switch ($emocao) {
            case "feliz":
                echo "Que bom que você está feliz! Continue assim.";
                break;
            case "triste":
                echo "Eu sinto muito que você esteja triste. Tente ouvir uma música que você gosta ou conversar com um amigo.";
                break;
            case "nervoso":
                echo "Respire fundo. Tudo vai ficar bem!";
                break;
            case "cansado":
                echo "Parece que você precisa de um descanso. Que tal uma soneca?";
                break;
            case "entediado":
                echo "Vamos encontrar algo divertido para fazer!";
                break;
            default:
                echo "Emoção desconhecida.";
        }
    }
    ?>
</body>
</html>