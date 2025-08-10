// ES Modules

export function sortearNumero(alunos){
    alunos.forEach(aluno => {
    aluno.numeroSorteado = Math.floor(Math.random() * 101);
});
}

export function descobrirMaior(alunos) {
    let maior = 0;
    alunos.forEach(aluno => {
        if(aluno.numeroSorteado > maior) {
            maior = aluno.numeroSorteado;
        }
    })
    return maior;
}
