// função que verifica se o usuário é maior ou menor de idade

function verificarIdade(idade) {
    if(idade >= 18) {
        return console.log(`Entrada permitida.`);
    } else {
        return console.log(`Entrada não permitida.`);
    }
}

function main() {
    verificarIdade(18);
}

main();