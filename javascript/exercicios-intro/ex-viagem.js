/*  programa que calcula o valor de uma viagem
    1 - preço do combustível
    2 - gasto médio de combustível por KM
    3 - distância em KM da viagem
*/

let precoCombustivel = 5.79;
let distanciaKM = 1580;
let mediaCombustivelKM = 12;
let KMPorLitro = distanciaKM / mediaCombustivelKM;
let gasto = KMPorLitro * precoCombustivel;


console.log(`Valor gasto com combustível para a viagem: R$ ${gasto.toFixed(2)}`);