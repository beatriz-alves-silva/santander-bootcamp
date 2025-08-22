const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'tarefas.csv');

async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath);
        const textoDoArquivo = arquivo.toString('utf8');
        console.log(textoDoArquivo);
    } catch(error) {
        console.log(error);
    } finally {
        console.log('Finalizou!');
    }

}

buscarArquivo();

/* 
promiseLeituraArquivo
    .then((arquivo) => arquivo.toString('utf-8'))
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
    .then((linhaSemCabecalho) => linhaSemCabecalho.map((linha) => {
        const [nome, feito] = linha.split(';');
        return {
            nome, 
            feito: feito.trim() === 'true'
        }
    }))
    .then((listaDeTarefas) => {
        console.log(listaDeTarefas)
    })
    .catch((error) => console.log('Falha na leitura!', error))
*/
