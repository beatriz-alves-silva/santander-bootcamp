// callback
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function calcular(a, operacao, b) {
    console.log(operacao(a, b));
}

calcular(10, soma, 30);
calcular(10, subtracao, 30);
calcular(10, multiplicacao, 30);
calcular(10, divisao, 30);