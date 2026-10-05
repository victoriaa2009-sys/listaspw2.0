<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 4</title>
</head>
<body>
    <ul>
        <?php
            $planetas = array(
                "Planeta A" => "Gasoso",
                "Planeta B" => "Rochoso",
                "Planeta C" => "Gasoso",
                "Planeta D" => "Rochoso",
                "Planeta E" => "Gasoso"
            );

            foreach ($planetas as $nome => $tipo) {
                echo "<li>$nome: $tipo</li>";
            }
        ?>
    </ul>
</body>
</html>