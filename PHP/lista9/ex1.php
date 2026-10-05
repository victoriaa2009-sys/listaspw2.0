<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 1</title>
</head>
<body>
    <ul>
        <?php
            $inventario = array("Espada", "Poção de Vida", "Escudo");
            foreach ($inventario as $item) {
                echo "<li>$item</li>";
            }
        ?>
    </ul>
</body>
</html>