/*3 – Crie uma função chamada tempo_total que receba a quantidade de horas e minutos 
que um jovem passou jogando videogame e retorne o total de minutos jogados. Peça ao 
usuário para digitar as horas e minutos, e exiba o tempo total em minutos.
*/

function tempo_total(horas, minutos) {
    return (horas * 60) + minutos;
}

var horas = parseInt(prompt("Digite a quantidade de horas jogadas:"));
var minutos = parseInt(prompt("Digite a quantidade de minutos jogados:"));

alert("O tempo total jogado em minutos é: " + tempo_total(horas, minutos));    
