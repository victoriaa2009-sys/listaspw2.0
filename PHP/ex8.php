<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 8</title>
</head>
<body>
    <form action=" " method="POST">
        <label for="usuario">Nome de usuário:</label>
        <input type="text" id="usuario" name="usuario">

        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha">

        <button type="submit">Enviar</button>

    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $usuario = $_POST["usuario"];
        $senha = $_POST["senha"];

        if ($usuario == "admin" && $senha == "12345") {
            echo "Login bem-sucedido";
        } else {
            echo "Nome de usuário ou senha incorretos";
        }
    }
    ?>
</body>
</html>