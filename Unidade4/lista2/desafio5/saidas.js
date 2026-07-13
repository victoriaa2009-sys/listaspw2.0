/*Desafio 5 - Criação de Senhas Aleatórias
Crie um programa que gere uma senha aleatória de 8 caracteres, misturando letras,
números e símbolos.
*/
var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
var senha = "";

for (let i = 0; i < 8; i++) {
    var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(indiceAleatorio);
}

document.write("Senha gerada: " + senha);   