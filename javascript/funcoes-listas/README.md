# Funções e manipulação de listas

## First class functions
- Em js as funções são tratadas como qualquer outro valor (variável)
- É possível, por exemplo, atribuir uma função a uma variável ou passar uma função como argumento para outra função (callback)
~~~javascript
function dizerOla(nome) {
    console.log(`Olá, meu nome é ${nome}`);
}

// a função "dizerOla" está sendo atribuída à constante "referenciaNova"
// escrever "dizerOla" sem () faz a variável apontar pra função
const referenciaNova = dizerOla;

// agora a variável pode ser usada pra chamar a função original
referenciaNova("João");

// a função aceita outra função como argumento
// "Callback": programação assíncrona em js
function dizerNomeCompleto(referenciaNova, sobrenome) {
    // executa a função que foi recebida como argumento
    referenciaNova("Ana");
    console.log(sobrenome);
}

dizerNomeCompleto(referenciaNova, "da Silva");
~~~

## Formas de declaração
~~~javascript
function nomeDaFuncao() {
    // declarando com o function e nominando diretamente
}

const nomeDeOutraFuncao = function() {
    // atribuindo a função à uma variável, a referência da função é a variável
}
~~~
- A diferença entre os dois é o hoisting, pois a função que é referenciada pela variável será undefined

## Declaração explícita e arrow function
- **Arrow Function** é uma forma mais curta de escrever funções em js
~~~javascript
const numeros = [1, 2, 3, 4];
const dobro = numeros.map(function(n) {
  return n * 2;
});

// arrow function
const dobro = numeros.map(n => n * 2);
~~~

- O 'return' é implícito:
~~~javascript
const soma = (a, b) => a + b; 
~~~

- Com apenas um parâmetro os parênteses são opcionais
~~~javascript
const quadrado = numero => numero * numero;
~~~

- **Quando NÂO usar**:
    - Para métodos principais de um objeto (se precisa que o 'this' se refira ao próprio objeto)
    - Para funções construtoras (não podemos usar o 'new' com arrow function)

## Closures
- É a combinação de uma função com as variáveis do seu ambiente externo (escopo)
    - Uma closure acontece quando uma função interna "se lembra" e continua a ter acesso às variáveis de sua função externa, mesmo depois que a função externa já terminou de excutar
~~~javascript
function soma(x) {
    return function(y) {
        return x + y;
    }
}

const minhaSoma = soma(10);

console.log(minhaSoma(20)); // saída: 30
console.log(minhaSoma(30)); // saída: 40
console.log(minhaSoma(40)); // saída: 50
~~~

- **Usos**:
    - Privacidade de dados (encapsulamento) -> variável privada
    - Estado persistente
    - Aplicações de funções
    - Callbacks e programação assíncrona

## Invocação
- **Direta**:
    - Basta usar o nome da função com parênteses
    - O valor de *`this`* no modo 'não estrito' aponta para o objeto globall (window) e no modo 'estrito' (*`use strict`*) é *`undefined`*
    ~~~javascript
    function mostrarThis() {
        console.log(this);
    }

    mostrarThis();
    ~~~

- **Call** e **Apply**:
    - É uma forma de uma função (ou método) ser executada em um "contexto" diferente
    - Invocar uma função permitindo definir manualmente qual será o valor do *`this`* dentro dela
    - Útil para "pegar emprestado" um método de um objeto e usar em outro objeto que não possui esse método
    ~~~javascript
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
    ~~~

## Listas
**foreach**
- "Para cada... faça algo"
- Executa uma função para cada elemento do array
- Utilizado quando não precisamos criar um novo array a partir dele
- Retorna *`undefined`*, ele não cria um novo array

**map**
- Cria um **novo array** com o resultado da aplicação de uma função em cada elemento do array original
- Utilizado quando precisamos transformar os doados de um array em um novo array
- Retorna um novo array

**filter**
- Filtra e mantém apenas o que passar no teste
- Cria um **novo array** contendo apenas os elementos do array original que passam em uma condição (true)
- Utilizado quando precisamos selecionar um subconjunto de elementos do array com base em uma condição
- Retorna um novo array

**reduce**
- Executa uma função redutora para cada elemento do array, resultando em um único valor final
- Utilizado quando precisamos agregar os dados de um array em um único resultado
- Retorna o valor único acumulado 