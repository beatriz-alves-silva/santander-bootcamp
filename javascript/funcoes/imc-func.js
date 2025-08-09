// IMC = peso / (altura * altura)

function calcularIMC (peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

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

function main () {
    imc = calcularIMC(52, 1.53);
    console.log(`IMC ${imc.toFixed(2)}, condição:`, classificarIMC(imc));
}

main();