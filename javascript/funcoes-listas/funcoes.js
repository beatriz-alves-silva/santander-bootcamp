function dizerOla(nome) {
    console.log(`Olá, meu nome é ${nome}`);
}

const referenciaNova = dizerOla;

referenciaNova("João");

function dizerNomeCompleto(referenciaNova, sobrenome) {
    referenciaNova("Ana");
    console.log(sobrenome);
}

dizerNomeCompleto(referenciaNova, "da Silva");

/* Formas de declaração */
function nomeDaFuncao() {
    // declarando com o function e nominando diretamente
    console.log('função nomeDaFuncao');
}

const nomeDeOutraFuncao = function () {
    // atribuindo a função à uma variável, a referência da função é a variável
    console.log('função nomeDeOutraFuncao');
}

nomeDaFuncao();
nomeDeOutraFuncao();

/* Declaração explícita e arrow function */
function funcaoExplicita() {
    console.log(this);
}

const funcaoArrow = () => {
    console.log(this);
}

const joao = {
    nome: "João",
    funcaoExplicita,
    funcaoArrow
}

joao.funcaoExplicita();
joao.funcaoArrow();

/* Arrow Function */

const pessoa = {
    nome: "Ana",
    apresentar: function() {
        // "this" aqui é o objeto "window" (undefined), não é a "pessoa"
        setTimeout(function() {
            console.log(this.nome); // imprime undefined
        }, 1000);
    }
};

const pessoa2 = {
    nome: "Maria",
    apresentar: function() {
        setTimeout(() => {
            // a arrow function herda o "this" da função "apresentar" -> "pessoa"
            console.log(this.nome) // imprime "Maria"
        })
    }
};

/* Closures */
function criarContador() {
    let contagem = 0; // essa variável pertence a 'criarContador'

    // função definida dentro de 'criarContador'
    function incrementar() {
        contagem++;
        console.log(contagem);
    }
    
    // a função externa retorna a função interna
    return incrementar;
}

const meuContador = criarContador();

// o 'meuContador' (que é a função incrementar) se lembra da variável 'contagem'
meuContador(); // saída: 1
meuContador(); // saída: 2
meuContador(); // saída: 3

// se criarmos um novo contador ele terá a sua própria contagem
const meuOutroContador = criarContador();
meuOutroContador(); // saída: 1

function soma(x) {
    return function(y) {
        return x + y;
    }
}

const minhaSoma = soma(10);

console.log(minhaSoma(20)); // saída: 30
console.log(minhaSoma(30)); // saída: 40
console.log(minhaSoma(40)); // saída: 50

/* .call e .apply */
function apresentar(estado, ano) { // o método que queremos emprestar
    console.log(
        `Olá, eu sou um ${this.tipo} ${this.nome}, sou ${estado} e do ano ${ano}.`
    );
}

const carro = {
    nome: "Mustang",
    tipo: "veículo"
};

// apresentar("novo", 2025); // Erro ou resultado inesperado
// usando .call() para que 'this' dentro de 'apresentar' se refira a 'carro'
apresentar.call(carro, "moderno", 2025);

// usando .apply() para o mesmo objetivo, porém agora os argumentos estão em um array
const args = ["antigo", 1998];
apresentar.apply(carro, args);