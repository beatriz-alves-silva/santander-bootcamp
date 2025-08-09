// IMC = peso / (altura * altura)

let peso = 52;
let altura = 1.53;
let imc = peso / (altura * altura);

function classificarIMC (imc) {
    let condicao = "";
    if (imc < 18.5) {
        condicao = "Abaixo do peso";
    } else if (imc < 25) {
        condicao = "Peso normal";
    } else if (imc < 30) {
        condicao = "Acima do peso";
    } else if (imc < 40) {
        condicao = "Obeso";
    } else {
        condicao = "Obesidade grave"
    }
    return condicao;
}

console.log(`IMC ${imc.toFixed(2)}, condição:`, classificarIMC(imc));