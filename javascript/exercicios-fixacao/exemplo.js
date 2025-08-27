// exemplo de uma função que retorna uma Promise
function buscarDadosServidor() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({usuario: 'João', id: 123});
        }, 3000);
    });
}

async function processarDados() {
    try {
        console.log('1 - Iniciando processamento...');

        // o await "pausa" a execução aqui até a Promise ser resolvida
        const dados = await buscarDadosServidor();

        // essa linha só executa depois que a Promise for resolvida
        console.log('2 - Dados recebidos com sucesso:', dados);

        const nomeUsuario = `${dados.usuario}`;
        console.log('3 - Processando nome: ', nomeUsuario);
    } catch(erro) {
        console.log('4 - Ocorreu um erro:', erro);
    }
}

processarDados();

console.log("5. Este console.log executa imediatamente, sem esperar. A função 'processarDados' está rodando em segundo plano!");
