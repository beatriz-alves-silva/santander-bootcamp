class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        console.log(`Olá, me chamo ${this.nome}!`);
    }
}

const pessoa1 = new Pessoa("João", 21);

console.log(pessoa1);

// nesse caso, professor herda o construtor e métodos de pessoa
class Professor extends Pessoa {
    departamento;

    constructor(nome, idade, departamento) {
        // o super chama o construtor da classe pai (Pessoa)
        super(nome, idade);
        // depois do super podemos definir as propriedades dessa classe
        this.departamento = departamento;
    }

    // podemos adicionar um novo método existente apenas em Professor
    infos() {
        console.log(`Professor(a) ${this.nome} pertence ao departamento ${this.departamento}`);
    }

    // podemos sobreescrever um método da classe pai
    saudacao() {
        console.log(`Sou ${this.nome} e sou do departamento ${this.departamento}`);
    }
}

// criando uma instanciação de Professor
const professor1 = new Professor("Ana", 43, "DAINF");

console.log(professor1);