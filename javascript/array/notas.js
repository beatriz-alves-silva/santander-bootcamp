const notas = [6, 5, 9, 3];

function calcularMedia(notas) {
    let totalNotas = 0;
    for(let i = 0; i < notas.length; i++) {
        totalNotas += notas[i];
    }
    return totalNotas / notas.length;
}

console.log(`Média final: ${calcularMedia(notas)}`);
