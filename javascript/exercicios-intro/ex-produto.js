function calculoValor (valorProduto, pagamento) {
    let valorFinal = 0;
    if (pagamento == "Débito") {
        valorFinal = valorProduto - (valorProduto * 0.1);
    } else if (pagamento == "Dinheiro" || pagamento == "Pix") {
        valorFinal = valorProduto - (valorProduto * 0.15);
    } else if (pagamento == 2) {
        valorFinal = valorProduto;
    } else if (pagamento > 2) {
        valorFinal = valorProduto + (valorProduto * 0.1);
    } else {
        console.log("Forma de pagamento inválida!");
    }
    return valorFinal.toFixed(2);
}

console.log(`Valor final =`, calculoValor(10, "dinheiro"));