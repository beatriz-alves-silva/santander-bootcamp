// CommonJS

const { descobrirMaior, sortearNumero } = require('./funcoes.cjs');

const alunos = [
    {nome: "João", numeroSorteado: 0},
    {nome: "Ana", numeroSorteado: 0},
    {nome: "Pedro", numeroSorteado: 0},
    {nome: "Maria", numeroSorteado: 0},
    {nome: "Gabriel", numeroSorteado: 0}
]

sortearNumero(alunos);

console.log(alunos);
console.log(`Maior número sorteado: ${descobrirMaior(alunos)}`);