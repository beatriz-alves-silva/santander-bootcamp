const readLine = require('readline/promises');

const rl = readLine.createInterface({
    input: process.stdin, // entrada padrão teclado
    output: process.stdout // saída padrão terminal
});

const tabuleiro = [ [" ", " ", " "],
                    [" ", " ", " "],
                    [" ", " ", " "]
];

async function iniciarJogo() {
    let jogadorAtual = "X"; // jogador x é o usuário
    let status = "em andamento";

    while(status === "em andamento") {
        mostrarTabuleiro()

        // vez do jogador
        if(jogadorAtual === "X") {
            await fazerJogadaHumano();
            if(checarVitoria(tabuleiro, "X")) {
                status = "Vitória do jogador!";
            }
        } else {
            console.log('Vez do computador:');
            fazerJogadaComputador();
            if (checarVitoria(tabuleiro, "O")) {
                status = "Vitória do Computador!";
            }
        }

        if(status === "em andamento" && checarEmpate(tabuleiro)) {
            status = "Embate!";
        }

        // alterna o jogador
        jogadorAtual = (jogadorAtual === "X") ? "O" : "X";
    }

    mostrarTabuleiro();
    console.log("\n--- FIM DE JOGO ---");
    console.log(status);
    rl.close();
}

async function fazerJogadaHumano() {
    let linha, coluna;
    let jogadaValida = false;

    while(!jogadaValida) {
        // recebe as entradas do usuário
        const respostaLinha = await rl.question('Digite a linha: ');
        const respostaColuna = await rl.question('Digite a coluna: ');

        // converte pra utilizar como índice do array
        linha = parseInt(respostaLinha) - 1;
        coluna = parseInt(respostaColuna) - 1;

        if (linha >= 0 && linha <= 2 && coluna >= 0 && coluna <= 2 && tabuleiro[linha][coluna] === " ") {
            jogadaValida = true;
        } else {
            console.log("\nJogada inválida! Tente novamente.\n");
        }
    }
    // altera o tabuleiro
    tabuleiro[linha][coluna] = "X";
}

function mostrarTabuleiro() {
    console.log(` ${tabuleiro[0][0]} | ${tabuleiro[0][1] } | ${tabuleiro[0][2]}`);
    console.log('-----------');
    console.log(` ${tabuleiro[1][0]} | ${tabuleiro[1][1] } | ${tabuleiro[1][2]}`);
    console.log('-----------');
    console.log(` ${tabuleiro[2][0]} | ${tabuleiro[2][1] } | ${tabuleiro[2][2]}\n`);
}

function checarEmpate(t) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (t[i][j] === " ") {
                return false;
            }
        }
    }
    return true;
}

function fazerJogadaComputador() {
    let jogadaValida = false;
    
    // até encontrar uma posição vazia
    while (!jogadaValida) {
        let linha = Math.floor(Math.random() * 3);
        let coluna = Math.floor(Math.random() * 3);

        if (tabuleiro[linha][coluna] === " ") {
            tabuleiro[linha][coluna] = "O";
            jogadaValida = true;
        }
    }
}

function checarVitoria(t, jogador) {
    // checa as linhas
    for (let i = 0; i < 3; i++) {
        if (t[i][0] == jogador && t[i][1] == jogador && t[i][2] == jogador) {
            return true;
        }
    }

    // checa as colunas
    for (let j = 0; j < 3; j++) {
        if (t[0][j] == jogador && t[1][j] == jogador && t[2][j] == jogador) {
            return true;
        }
    }

    // checa diagonais
    if (t[0][0] == jogador && t[1][1] == jogador && t[2][2] == jogador) {
        return true;
    }

    if (t[0][2] == jogador && t[1][1] == jogador && t[2][0] == jogador) {
        return true;
    }

    return false;
}

iniciarJogo();