/*  programa que calcula o valor de uma viagem
    1 - preço etanol
    2 - preço gasolina
    3 - tipo de combustível
    2 - gasto médio de combustível por KM
    3 - distância em KM da viagem
*/

let precoEtanol = 5.79;
let precoGasolima = 5.79;
let tipoCombustivel = "";
let distanciaKM = 1580;
let mediaCombustivelKM = 12;
let KMPorLitro = distanciaKM / mediaCombustivelKM;
let gasto = 0;

function calcularGasto (tipoCombustivel) {
    if (tipoCombustivel == "etanol"){
        gasto = KMPorLitro * precoEtanol;
    } else if (tipoCombustivel == "gasolina") {
        gasto = KMPorLitro * precoGasolima;
    } else {
        console.log(`Entrada inválida.`);
    }
    return gasto
}

console.log(`Valor gasto com combustível para a viagem: R$`, calcularGasto("etanol").toFixed(2));