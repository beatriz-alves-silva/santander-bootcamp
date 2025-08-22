# Promises e assincronismo com JS
- Uma *promise* é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona
- Será resolvido em algum momento (como um pedido)
- Tarefas que levam tempo e não podem travar o restante do código

**3 Estados**

- `pending`: estado inicial, operação ainda não foi concluída
- `fulfilled` ou `resolved`: operação foi concluída com sucesso 
- `rejected`: operação falhou

- Quando uma promise é *realizada* ou *rejeitada* o seu estado se torna permanente, não pode voltar para *pendente*

## Consumir uma promise

- `.then()`: é executado quando a promise é realizada (sucesso), ele recebe o valor de resultado como argumento
- `.catch()`: é executado quando a promise é rejeitada (erro), ele recebe o erro como argumento
- `.finally()`: é executado sempre ao final, independente se for realizada ou rejeitada