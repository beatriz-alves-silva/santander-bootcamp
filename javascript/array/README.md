# Arrays

Array é uma lista ordenada de valores.

~~~javascript
// strings
const nomes = ["Ana", "Beto", "Carlos"];

// números
const numeros = [10, 20, 30, 40];

// tipos mistos
const misto = [1, "texto", true, { id: 1 }];
~~~

Cada item em um array possui um índice (index) -> posição do item na lista. Para acessar um item utiliza-se [index]

~~~javascript
const frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas[1]); // saída: Banana
~~~

Para saber quantos itens existem em um array:
~~~javascript
console.log(frutas.length); // saída: 3
~~~

**O índice do último item é sempre array.length - 1**

## Adicionar ou remover item

~~~javascript
// .push(item) adciona itens ao final do array
frutas.push("Mamão");

// .pop() remove o último item e o retorna
~~~

## Métodos

**forEach()** - "passar por cada item"

~~~javascript
frutas.forEach(function(fruta)) {
    console.log(`${fruta} é uma fruta da lista.`);
}
~~~

**map()** - "transformar" cada item

~~~javascript
const dobro = numeros.map(functio(numero) {
    return numero * 2;
})
console.log(dobrados); // saída: [10, 20, 30, 40]
console.log(numeros);  // array original não foi modificado: [5, 10, 15, 20]
~~~

**filter()** - "selecionar" itens

~~~javascript
const maioresQue10 = numeros.filter(function(numero) {
  return numero > 10;
});
console.log(maioresQue10); // saída: [15, 20]
~~~

**find()** - "encontrar" o primeiro item

~~~javascript
const primeiroMaiorQue12 = numeros.find(function(numero) {
  return numero > 12;
});
console.log(primeiroMaiorQue12); // saída: 15
~~~
