const fs = require('fs');
let dadosObjeto = [];

try {
    const dadosJSON = fs.readFileSync('./alunos.json', 'utf-8');

    dadosObjeto = JSON.parse(dadosJSON);
} catch (erro) {
    console.error("Erro ao ler ou processar o arquivo JSON:", erro);
}

const idadeAlunos = dadosObjeto.map(aluno => aluno.idade);

function encontrarMedia(array) {
    let soma = 0;

    if (array.length === 0) {
        return 0;
    }

    array.forEach(valor => {
        soma += valor;
    });

    return soma / array.length;
}

function encontrarAluno(nomeAluno, array) {
    const alunoEncontrado = array.find(aluno => aluno.nome === nomeAluno);
    if(!alunoEncontrado) {
        return "Aluno não encontrado.";
    } else {
        return alunoEncontrado;
    }
}

console.log(`Idade média dos alunos: ${encontrarMedia(idadeAlunos)}`);
console.log(encontrarAluno("Paulo", dadosObjeto));