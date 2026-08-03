/*10 – Faça um script que converta da notação de 24 horas para a notação de 12 horas. 
Por exemplo, o programa deve converter 14:25 em 2:25 P.M. A entrada é dada no formato 
de string, por exemplo: “15:31”. Inclua um loop que permita que o usuário repita esse 
cálculo para novos valores de entrada todas as vezes que desejar.
*/

var repetir = true;

while (repetir) {
    var hora24 = prompt("Digite a hora (HH:MM):");
    var partes = hora24.split(":");
    var hora = parseInt(partes[0]);
    var minuto = partes[1];
    var periodo = "A.M.";

    if (hora >= 12) {
        periodo = "P.M.";
        if (hora > 12) {
            hora -= 12;
        }
    } else if (hora === 0) {
        hora = 12;
    }

    alert("Hora no formato 12 horas: " + hora + ":" + minuto + " " + periodo);
}   