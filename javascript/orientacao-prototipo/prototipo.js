const mae = {
    sobrenome: "Silva",
    falar() {
        console.log("Olá!");
    }
};

// cria um novo objeto "filho" cujo protótipo é o objeto "mae"
const filho = Object.create(mae);
filho.nome = "Ana";

console.log(filho.nome); // saída: "Ana" (propriedade do próprio objeto)
console.log(filho.sobrenome); // saída: "Silva" (herdado do protótipo "mae")
filho.falar();

/******************************************************************/

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.apresentar = function() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
};

const pessoa1 = new Pessoa("Maria", 30);
const pessoa2 = new Pessoa("Carlos", 25);

pessoa1.apresentar(); // "Meu nome é Maria e tenho 30 anos."
pessoa2.apresentar(); // "Meu nome é Carlos e tenho 25 anos."

// ES6 introduziu a sintaxe de class
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log("Som genérico");
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log("Au au!");
    }
}

const meuCachorro = new Cachorro("Rex");
meuCachorro.fazerSom(); // Saída: "Au au!"