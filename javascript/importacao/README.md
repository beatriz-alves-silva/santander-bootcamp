# Importação e Exportação 

*Para os exercícios deste curso estou utilizando o Node.js, então deixarei aqui a "diferença" entre o sistema de módulos com o JS no navegador*

## JS navegador
- No navegador a forma padrão para trabalhar com módulos é o sistema **ES Modules (ESM)**.
- Para o navegador entender que os arquivos são módulos é necessário adicionar o atributo *type="module"* na tag *script* no HTML.
~~~html
<script type="module" src="script.js"></script>
~~~

### Exportar
- Para exportar uma função, variável, classe...
~~~javascript
export function somar(a, b) {
    return a + b;
}
~~~

### Importar (usar o código de outro arquivo)
~~~javascript
import funcoes, { somar } from './soma.js';
console.log(`Soma: ${somar(4, 5)}`);
~~~

## Node.js
- O Node.js foi criado antes do JS ter um sistema de módulos oficial, então utilizavam um sistema próprio, o CommonJS (CJS). Foi utilizado como padrão por muitos anos.
- Atualmente o Node.js suporta tanto o CommonJS quanto o ES Modules.

### Exportar
~~~javascript
function somar(a, b) {
    return a + b;
}

const codigo = 123;

// é possível exportar várias coisas como um objeto
module.exports = {
    somar,
    codigo
};
~~~

### Importar
~~~javascript
const funcoes = require('./somar.js');
// ou com destructuring
const { somar, codigo } = require('./somar.js');
~~~

## Como usar
Neste projeto criei duas pastas para demonstrar como ficaria o mesmo exercício utilizando os dois sistemas de módulo.
Para rodar a versão com **`import`** no Node.js, é necessário adicionar **`"type": "module"`** ao arquivo *package.json*.

Para gerar o *package.json* no terminal:
~~~javascript
// para preencher os campos:
npm init
// ou para gerar um arquivo padrão:
npm init -y
~~~ 

A partir desse momento, todos os arquivos com a extensão *.js* dentro deste projeto serão tratados pelo Node.js como *ES Modules*. Agora devemos usar a sintaxe **`import`** e **`export`** neles.

Caso não queira alterar o *package.json* ou já tenha alterado e queira utilizar os dois sistemas de módulos no mesmo projeto, podemos utilizar extensões de arquivos especiais:

**`.mjs`**: Para arquivos que usam ES Modules (*import*/*export*). O "m" vem de "Módulo".
**`.cjs`**: Para arquivos que usam CommonJS (*require*/*module.exports*). O "c" vem de "CommonJS".
