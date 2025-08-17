// foreach
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach((numero, i) => {
    console.log(`O número no índice ${i} é o ${numero}`);
});

// map
const numerosDobrados = numeros.map(numero => numero * 2);

console.log('Array original:', numeros);
console.log('Novo array com map:', numerosDobrados);

// filter
const numerosPar = numeros.filter(numero => numero % 2 === 0);

console.log('Array par com filter:', numerosPar);

// reduce
const valorTotal = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0); // o 0 é o valor inicial do acumulador

console.log(valorTotal);