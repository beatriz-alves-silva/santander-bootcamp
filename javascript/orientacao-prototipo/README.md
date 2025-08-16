# Orientação a protótipos
- Modelo de herança do js
- O js não possui classes -> reutilização de comportamento e herança ocorrem através de objetos que servem como protótipos para outros objetos

## Todo objeto tem um protótipo
- Em js (quase todo) objeto possui uma propriedade chamada *`[Prototype]`*, que é uma referência para outro objeto
    - Este outro objeto é o seu protótipo

## Prototype Chain
- A ligação entre um objeto e seu protótipo é chamada de cadeia de protótipos (prototype chain)
- Se uma propriedade não for encontrada no objeto, a busca continua no protótipo do protótipo
~~~javascript
const mae = {
    sobrenome: "Silva",
    falar() {
        console.log("Olá!");
    }
};

// cria um novo objeto "filho" cujo protótipo é o objeto "pai"
const filho = Object.create(pai);
filho.nome = "Ana";
~~~

## Herança prototípica
- Em vez de copiar propriedades de um objeto para outro, os objetos delegam a busca por propriedades e métodos para seus protótipos
- Isso é mais eficiente em termos de memória, pois vários objetos podem compartilhar o mesmo conjunto de métodos definidos em um único protótipo

## Funções construtoras
- Antes da sintaxe de class:
~~~javascript
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
~~~

- O ES6 introduziu a sintaxe de class -> no fundo, o js continua utilizando o mesmo mecanismo de herança baseada em protótipos, é apenas uma forma de "mascarar" o uso
~~~javascript
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
~~~