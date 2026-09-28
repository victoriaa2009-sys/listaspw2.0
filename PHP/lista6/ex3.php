<?php
$valorProduto = 100.00; 
$percentualDesconto = 5;
$valorDesconto = ($valorProduto * $percentualDesconto) / 100;
$precoFinal = $valorProduto - $valorDesconto;

echo "Preço original: R$ $valorProduto";
echo "Valor do desconto: R$ $valorDesconto";
echo "Preço final: R$ $precoFinal";
?>
