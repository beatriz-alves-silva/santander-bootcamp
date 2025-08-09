const frutas = ["Maçã", "Banana", "Laranja"];

frutas.push("Mamão");
frutas[4] = "Limão";

console.log(`Quantidade de itens da lista: ${frutas.length}\n`);

frutas.forEach(function(fruta) {
    console.log(`${fruta} é um item da lista.`);
});

frutaRemovida = frutas.pop();

console.log(`\nFruta removida da lista: ${frutaRemovida}`);
console.log(frutas);