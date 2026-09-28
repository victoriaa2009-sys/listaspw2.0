<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 12</title>
</head>
<body>
    <form action=" " method="POST">
        <label for="jogador1">Jogador 1:</label>
        <select id="jogador1" name="jogador1">
            <option value="pedra">Pedra</option>
            <option value="papel">Papel</option>
            <option value="tesoura">Tesoura</option>
        </select>

        <label for="jogador2">Jogador 2:</label>
        <select id="jogador2" name="jogador2">
            <option value="pedra">Pedra</option>
            <option value="papel">Papel</option>
            <option value="tesoura">Tesoura</option>
        </select>

        <button type="submit">Enviar</button>

    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $jogador1 = $_POST["jogador1"];
        $jogador2 = $_POST["jogador2"];

        if ($jogador1 == $jogador2) {
            echo "Empate!";
        } else if (($jogador1 == "pedra" && $jogador2 == "tesoura") || ($jogador1 == "tesoura" && $jogador2 == "papel") || ($jogador1 == "papel" && $jogador2 == "pedra")) {
            echo "Jogador 1 venceu!";
        } else {
            echo "Jogador 2 venceu!";
        }
    }
    ?>
</body>
</html>