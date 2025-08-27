const fs = require('fs').promises;

async function encontrarUsuariosPorEmail(email) {
    console.log('Iniciando a busca no arquivo...');

    try {
        const dadosArquivo = await fs.readFile('usuarios.json', 'utf-8');
        const usuarios = JSON.parse(dadosArquivo);
        const usuarioEncontrado = usuarios.find(usuario => usuario.email === email);
        
        if(!usuarioEncontrado) {
            console.log('Usuário não encontrado.');
            return null;
        }

        console.log('Usuário encontrado!');
        return usuarioEncontrado;
    } catch(erro) {
        console.error('Erro ao ler arquivo: ', erro.message);
        return null;
    }
}

encontrarUsuariosPorEmail('ana.silva@example.com')
    .then(usuario => {
        if(usuario) {
            console.log('Resultado da busca: ', usuario);
        }
    })

encontrarUsuariosPorEmail('bruno.costa@example.com')
    .then(usuario => {
        if(usuario) {
            console.log('Resultado da busca: ', usuario);
        }
    })

encontrarUsuariosPorEmail('carla.lima@example.com')
    .then(usuario => {
        if(usuario) {
            console.log('Resultado da busca: ', usuario);
        }
    })