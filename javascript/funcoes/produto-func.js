function calcularDesconto(valorProduto, valorDesconto) {
    let valorFinal = valorProduto - (valorProduto * valorDesconto);
    return valorFinal;
}

function calcularAcrescimo(valorProduto, valorAcrescimo) {
    let valorFinal = valorProduto + (valorProduto * valorAcrescimo);
    return valorFinal;
}

function calcularValorFinal (valorProduto, pagamento) {
    if (pagamento == "Débito") {
        return calcularDesconto(valorProduto, 0.1)
    } else if (pagamento == "Dinheiro" || pagamento == "Pix") {
        return calcularDesconto(valorProduto, 0.15);
    } else if (pagamento == 2) {
        return valorProduto;
    } else if (pagamento > 2) {
        return calcularAcrescimo(valorProduto, 0.1)
    } else {
        console.log("Forma de pagamento inválida!");
    }
}

function main () {
    console.log(`Total a ser pago: R$`,calcularValorFinal(20, "Pix"));
}

main();