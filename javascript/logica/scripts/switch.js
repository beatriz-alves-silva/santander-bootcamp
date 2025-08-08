let operacao = "divisao"

let num1 = 6;
let num2 = 10;

switch (operacao) {
    case "soma":
        console.log(`${num1} + ${num2} = ${num1+num2}`);
        break;
    case "subtracao":
        console.log(`${num1} - ${num2} = ${num1-num2}`);
        break;
    case "multiplicacao":
        console.log(`${num1} x ${num2} = ${num1*num2}`);
        break;
    case "divisao":
        console.log(`${num1} / ${num2} = ${num1/num2}`);
        break;
}