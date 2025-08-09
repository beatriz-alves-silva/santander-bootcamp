# Objetos com JS

Objeto é uma estrutura de dados que agrupa características e métodos (ações) relacionados.

## Declaração
~~~javascript
const pessoa = {
    // propriedades (chaves: valor)
    nome: 'João',
    idade: 18,
    habilidades: ["html", "css", "js"], // valor do tipo array
    endereco: { // valor do tipo objeto
        cidade: "São Paulo",
        estado: "SP",
        pais: "Brasil"
    },

    // método (função de um objeto)
    saudacao: function() {
        console.log(`Olá, me chamo ${this.nome}!`);
    }
};

pessoa.saudacao();
~~~

## Modificando
~~~javascript
// modificando uma propriedade existente
pessoa.idade = 21;

// adicionando uma nova propriedade
pessoa.disponivel = true;
~~~

## Removendo
~~~javascript
delete pessoa.habilidades;
~~~

## this

Dentro de um método de um objeto o *this* refere-se ao próprio objeto. Isso permite que os métodos acessem outras propriedades do mesmo objeto de forma dinâmica.


# Classes

As classes são um modelo para criar objetos. Elas encapsulam os dados (propriedades) e as funções (métodos) que um objeto terá.
~~~javascript
// utilizar a primeira letra maiuscula
class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    // métodos...
}
~~~

## Criar objetos (instanciação)
~~~javascript
const pessoa 1 = new Pessoa ("João", 19);
~~~

## Extends
extends = herança

Permite que uma classe filha herde todas as propriedades e métodos de uma classe mãe
~~~javascript
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
~~~