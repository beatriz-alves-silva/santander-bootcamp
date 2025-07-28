# Responsividade

Design responsivo: permite que a página seja reestruturada conforme o dispositivo de visualização -> adequação

## Multicolunas
- column...
    - count
    - width
    - exemplo:
        ~~~css
        #texto-multicol {
            column-count: 3;
        }
        ~~~
    - column-rule: divisão entre as colunas (parece border)
    - column-gap

## Flexbox
- distribui espaço entre itens em um conteiner e alinha elementos
    - ~~~css
        display: flex;
        ~~~
- **flex-direction**: direção dos itens
    - row (padrão), row-reverse, column, column-reverse
- **justify-content**: alinhamento no eixo principal
    - flex-start, flex-end, center, space-between, space-around, space-evenly
- **align-items**: alinhamento no eixo cruzado
    - stretch (padrão), flex-start, flex-end, center, baseline
- **align-content**: alinhamento de linhas no eixo cruzado se houver quebra de linha (flex-wrap: wrap)
- **flex-wrap**: quebra de linha dos itens
    - nowrap (padrão), wrap, wrap-reverse

## Grid
- permite criar layouts com linhas e colunas
    - ~~~css
        display: grid;
        ~~~
- **grid**: estrutura geral da página
- **flexbox**: organizar conteúdo dentro de cada área

## Media queries
- Recurso que permite aplicar propriedades do CSS para regras de tipos de mídia específicos
- estrutura
    - ~~~css
        /* at rule | midia type | media feature | operator | media feature */
        @media screen (min-width: 320px) and (max-width: 768px){
            /* estilo aplicado para este filtro */
        }
        ~~~
- **media feature**:
    - width, height e suas variações (min e max)
    - orientation: detecta se está no modo retrato ou paisagem
    - hover: indica que está sendo acessado através de um mecanismo de ponteiro (mouse)
    - pointer: detecta quão preciso é o ponteiro - detectar touch, mouse etc...
        - fine: mouse etc
        - coarse: touch
        - none: não possui dispositivo de apontamento
        - ~~~css
            @media (pointer: coarse) {

            }
            ~~~

## Breakpoints
- pontos de interrupção usados nas media queries para tratar a quebra de layout/ajustes