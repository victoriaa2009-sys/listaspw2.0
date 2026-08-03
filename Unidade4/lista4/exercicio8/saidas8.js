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

function estaVazio(vetor) {
    if (vetor.length === 0) {
        return true;
    }
    return false;
}

function maiorValor(vetor) {
    if (vetor.length === 0) {
        return -1;
    }

    let maior = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }

    return maior;
}

function menorValor(vetor) {
    if (vetor.length === 0) {
        return -1;
    }

    let menor = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }

    return menor;
}

function valorMedio(vetor) {
    if (vetor.length === 0) {
        return -1;
    }

    let soma = 0;

    for (let i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i];
    }

    return soma / vetor.length;
}

let vetorVazio = [];
let vetorNumeros = [];
for (let i = 0; i < 5; i++) {
    vetorNumeros.push(parseFloat(prompt("Digite um número:")));
}

console.log("Array vazio:");
console.log("Está vazio?", estaVazio(vetorVazio));
console.log("Maior valor:", maiorValor(vetorVazio));
console.log("Menor valor:", menorValor(vetorVazio));
console.log("Valor médio:", valorMedio(vetorVazio));

console.log("");

console.log("Array com elementos:");
console.log("Está vazio?", estaVazio(vetorNumeros));
console.log("Maior valor:", maiorValor(vetorNumeros));
console.log("Menor valor:", menorValor(vetorNumeros));
console.log("Valor médio:", valorMedio(vetorNumeros));