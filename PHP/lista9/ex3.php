<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 3</title>
</head>
<body>
    <ul>
        <?php
            $notas = array(7, 8, 9, 6, 10);
            $total = 0;
            foreach ($notas as $nota) {
                echo "<li>Nota: $nota</li>";
                $total += $nota;
            }
            $media = $total / count($notas);
            echo "<li>Média: $media</li>";
        ?>
    </ul>
</body>
</html>