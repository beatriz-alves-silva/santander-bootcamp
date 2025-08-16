# Variáveis e Escopo
- Nomes de variáveis são *case-sensitive* (**maria** é diferente de **Maria**)
- Não utilizar palavras reservadas
- Convenção camelCase: a primeira palavra começa com letra minúscula e as subsequentes com maiúscula (ex: dataNascimento)


## Var
- Escopo de função (só é visível dentro da função que foi declarada), se for declarada fora de uma função se torna uma variável global
    ~~~javascript
    var nome = "Maria";
    function dizerOla() {
        var saudacao = "Olá";
        console.log(`${saudacao}, ${nome}.`);
    }
    dizerOla(); // saída: Olá, Maria.
    console.log(saudacao); // Erro: saudacao is not defined
    ~~~
- As variáveis declaradas com *`var`* são içadas (movidas) para o topo do seu escopo durante a compilação
    - Nesse caso, a declaração é movida para cima mas a atribuição não -> undefined
    ~~~javascript
    // var nome;
    console.log(nome);
    var nome = "Ana";
    ~~~

## Let
- Forma mais utilizada atualmente
- Valor pode ser alterado (reatribuído)
- Escopo de bloco (só existe dentro do bloco de código em que foi declarada)
    ~~~javascript
    let idade = 20;
    if(idade) {
        let peso = 55;
        console.log(idade); // 20
        console.log(peso); // 55
    }
    console.log(peso); // Erro: peso is not defined
    ~~~

## Const
- Utilizada para declarar constantes (valor não pode ser reatribuído)
- Escopo de bloco

## Objeto
- Coleção dinâmica
~~~javascript
const x = {
    // chave: "Valor";
    nome: "João",
    idade: 20,
}
~~~