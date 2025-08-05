# Posicionamentos e exibição de elementos com CSS

## Propriedades de exibição
**Block**:
- ocupa toda a largura disponível do conteiner pai
- empilhamento vertical
- força quebra de linha antes e depois de si

**Inline**:
- empilhamento horizontal
- ocupa somente o espaço necessário para o conteúdo e não força quebra de linha

**Inline-block**:
- flui com o conteúdo como um inline mas se comporta como um elemento block (em relação ao seu conteúdo)

**Flex**:
- transforma o elemento em *flex conteiner* e seus filhos (diretos) em *flex items*

**Grid**:
- transforma o elemento em *grid conteiner" (controle sobre linhas e colunas)

**None**:
- remove completamente o elemento da página
- o elemento não é renderizado e não ocupa espaço
- geralmente usado para ocultar elementos e exibir dinamicamente

**Table, Table-row, Table-cell...**:
- os elementos se comportam como elementos de uma tabela

**List-item**:
- o elemento se comporta como um item de lista

**display: flex;**
- organiza os elementos em uma página dentro de containers e de forma dinâmica
- organiza os elementos em uma dimensão (linhas ou colunas)

**display: grid;**
- organiza os elementos em duas dimensões
- define linhas e colunas para o posicionamento do conteúdo

## Posicionamento dos elementos

**static**
- valor padrão
- segue o fluxo da página

**relative**
- visualmente parece o static
- adiciona 4 opções para deslocar o elemento: top, bottom, left e right

**absolute**
- o elemento ignora todo conteúdo para se posicionar onde desejamos
- adiciona 4 opções para deslocar o elemento: top, bottom, left e right
- possível realizar **sobreposições**

**fixed**
- deixa o elemento fixo na página
- no scroll ele ignora todos os elementos da página e aparece da mesma forma independente do movimento da página

**sticky**
- se comporta como um elemento de posição relativa e posteriormente fixa

**z-index**
- eixo z: profundidade
- define a "ordem" de visualização