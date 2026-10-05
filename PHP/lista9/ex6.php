<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 6</title>
</head>
<body>
    <ul>
        <?php
            $produtos = array(
                "Produto A" => 100,
                "Produto B" => 200,
                "Produto C" => 300
            );

            foreach ($produtos as $nome => $preco) {
                $desconto = $preco * 0.2;
                $precoComDesconto = $preco - $desconto;
                echo "<li>$nome: Preço original: $preco, Preço com desconto: $precoComDesconto</li>";
            }
        ?>
    </ul>
</body>
</html>