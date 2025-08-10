# JSON "JavaScript Object Notation"
- Notação de Objeto JavaScript
- É um formato de texto leve usado para armazenar e transportar dados.
- É apenas um texto puro (uma string).

## Regras de sintaxe
**`chave: valor`**

- As chaves devem obrigatoriamente ser strings com aspas duplas (")
- O valor pode ser:
    -string (também com aspas duplas)
    - number
    - object (outro objeto JSON aninhado)
    - array
    - true/false
    - null
- Não é permitido funções, comentários ou vírgula no final do último elemento

### Exemplo
~~~JSON
{
  "nome": "João Silva",
  "idade": 30,
  "ativo": true,
  "cursos": ["JavaScript", "Node.js", "React"],
  "endereco": {
    "cidade": "São Paulo",
    "estado": "SP"
  },
  "plano": null
}
~~~

## Uso de JSON em JavaScript
- Converter objeto JS para string JSON: **`JSON.stringify()`**
- Com o *stringify()* pegamos um objeto JS e convertemos em uma string no formato JSON, assim podemos enviar pela rede ou salvar em um arquivo.

~~~javascript
const usuario = {
    nome: "João",
    id: 123
}

const usuarioEmJSON = JSON.stringify(usuario);
// {"nome":"João","id":123}
~~~

- Converter string JSON para objeto JS: **`JSON.parse()`**
~~~javascript
// JSON recebido de um servidor
const dadosRecebidos = '{"nome":"Carlos","idade":40,"cidade":"Rio de Janeiro"}';

// converte o texto de volta para um objeto JavaScript
const usuarioObjeto = JSON.parse(dadosRecebidos);

console.log(usuarioObjeto.nome); // saída: Carlos
console.log(usuarioObjeto.cidade); // saída: Rio de Janeiro
~~~