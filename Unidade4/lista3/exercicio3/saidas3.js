/*3 – Adicione a fruta "abacaxi" ao final do array frutas, e depois remova o primeiro
elemento do array. Exiba o array atualizado no console.
*/

var frutas = ["maçã", "banana", "laranja"];
frutas.push("abacaxi");// push adiciona o elemento ao final do array
frutas.shift();// shift remove o primeiro elemento do array
console.log("Array atualizado:", frutas);
