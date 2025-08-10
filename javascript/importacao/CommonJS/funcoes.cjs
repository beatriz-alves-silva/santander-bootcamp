// CommonJS

function sortearNumero(alunos){
    alunos.forEach(aluno => {
    aluno.numeroSorteado = Math.floor(Math.random() * 101);
});
}

function descobrirMaior(alunos) {
    let maior = 0;
    alunos.forEach(aluno => {
        if(aluno.numeroSorteado > maior) {
            maior = aluno.numeroSorteado;
        }
    })
    return maior;
}

module.exports = { sortearNumero, descobrirMaior };