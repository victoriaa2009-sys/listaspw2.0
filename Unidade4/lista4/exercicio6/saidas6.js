/*6 – Codifique um script com uma função para calcular o volume de um cilindro. Seu 
programa principal deve solicitar a altura e o raio do cilindro em metros, chamar a função 
e exibir o resultado na tela.
*/

function calcularVolumeCilindro(altura, raio) {
    var volume = 3 * (raio * raio) * altura;// 3 é uma aproximação de pi
    return volume;
}

var altura = parseFloat(prompt("Digite a altura do cilindro em metros:"));
var raio = parseFloat(prompt("Digite o raio do cilindro em metros:"));

alert("O volume do cilindro é: " + calcularVolumeCilindro(altura, raio).toFixed(2) + " metros cúbicos.");       