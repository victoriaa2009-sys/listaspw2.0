/*8 – Programe um script com mais algumas funções úteis para a manipulação de arrays 
numéricos (suas funções devem percorrer o array):
a) uma função que receba um array e retorne true, caso esteja vazio, ou false, caso 
possua um ou mais elementos;
b) uma função que receba um array e retorne o maior valor;
c) uma função que receba um array e retorne o menor valor;
d) uma função que receba um array e retorne o valor médio.

As funções dos itens b, c e d devem retornar -1 caso o array esteja vazio. Deve-se criar 
dois arrays (um vazio e outro com alguns elementos) e testar (comprovar) o 
funcionamento de cada uma das funções.
*/

function isArrayEmpty(array) {
    return array.length === 0;
}

function getMaxValue(array) {
    if (array.length === 0) {
        return -1;
    }
    return Math.max(...array);
}

function getMinValue(array) {
    if (array.length === 0) {
        return -1;
    }
    return Math.min(...array);
}

function getAverageValue(array) {
    if (array.length === 0) {
        return -1;
    }
    var sum = array.reduce((acc, val) => acc + val, 0);
    return sum / array.length;
}

// Testando as funções com arrays
var emptyArray = [];
var filledArray = [10, 20, 30, 40, 50];

console.log("Array vazio está vazio?", isArrayEmpty(emptyArray)); // true
console.log("Array preenchido está vazio?", isArrayEmpty(filledArray)); // false

console.log("Maior valor do array vazio:", getMaxValue(emptyArray)); // -1
console.log("Maior valor do array preenchido:", getMaxValue(filledArray)); // 50

console.log("Menor valor do array vazio:", getMinValue(emptyArray)); // -1
console.log("Menor valor do array preenchido:", getMinValue(filledArray)); // 10

console.log("Valor médio do array vazio:", getAverageValue(emptyArray)); // -1
console.log("Valor médio do array preenchido:", getAverageValue(filledArray)); // 30    