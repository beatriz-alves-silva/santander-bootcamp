# Trabalhando com o Flexbox

Oferece uma maneira mais eficiente de organizar, alinhas e distribuir o espaço entre os itens do container, mesmo que o tamanho do elemento seja dinâmico

- flex-direction: row;
- flex-direction: column;

**flex-wrap**
- definir se haverá quebra de linha caso os itens não caibam no container

- **nowrap**: valor padrão, itens em uma única linha da direita para a esquerda ou de cima para baixo (depende do flex-direction)
- **wrap**: permite que os os itens quebrem para uma nova linha quando não houver mais espaço na linha atual
- **wrap-reverse**: semelhante ao *wrap* mas na direção inversa

**flex-flow**
- propriedade abreviada para utilizar o flex-direction e o flex wrap ao mesmo tempo

## justify-content
Alinha os itens no eixo principal (default -> horizontal)

- **flex-start**: (default) agrupa todos os itens no início
- **flex-end**: agrupa todos os itens no final
- **center**: agrupa os itens no centro
- **space-between**: espaço igual entre os itens, o primeiro item cola no início e o último no final
- **space-around**: espaço igual ao redor de cada item (as bordas tem metade do espaço que existe entre os itens)
- **space-evenly**: espaço identico em todos os vãos

## align-items
Alinha os itens no eixo transversal

- **stretch**: (default) estica os itens para preencher toda a altura do conteiner
- **flex-start**: alinha os itens no tipo do conteiner
- **flex-end**: alinha os itens na base
- **center**: centraliza os itens verticalmente
- **baseline**: alinha os itens de acordo com a linha de base