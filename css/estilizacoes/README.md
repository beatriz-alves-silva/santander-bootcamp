# Estilizações básicas com CSS

## Cores
- Cores pré-definidas
    - Mais de 140 cores, basta escrever o nome
- "currentcolor"
    - Utiliza a mesma cor do color definido no elemento
- Hexadecimal
- Hexadecimal com transparência
- RGB
- RGBA
    - Transparência
    ~~~css
    /* o A (alpha) vai de 0.0 a 1.0, quanto maior o valor, maior a intensidade da cor*/
    #rgba {
        color: rgb(60% , 10%, 30%, 0.5);
    }
    ~~~
- HSL (Hue, Saturation, Lightness)
    - Hue (matiz): grau na roda de cores (0 a 360)
    - Saturation (saturação): valor percentual
    - Lightness (luminosidade): percentual de luminosidade da cor
- HSLA
    - Transparência

## Imagens
- **Propriedade object-fit**
    - contain: a imagem mantém sua proporção mas é redimensionada para caber na dimensão fornecida
    - cover: a imagem mantém sua proporção e preenche a dimensão fornecida
    - fill: a imagem é redimensionada para preencher a dimensão fornecida
    - none: a imagem não é redimensionada
    - scale-down: a imagem é reduzida para a menor versão de none ou contain
- **Propriedade object-position**
    - Utilizado em conjunto com o fit para posicionar a imagem

## Fundo dos elementos
- color: utilizar alguma declaração de cor
- image:
    - url()
    - linear-gradient(cor-inicio, cor-fim)
    - radial-gradient(cor-inicio, cor-fim)
- size: 
    - cointain
    - cover
    - porcentagem
    - valor em px
- repeat: define como a imagem é repetida dentro do elemento
- position: posição
- attachment:
    - como o fundo do elemento vai se movimentar em relação a janela do navegador
        - fixed
        - scroll
        - local
- origin
    - origem da imagem
        - padding-box
        - border-box
        - content-box
- clip
    - controla qual área é preenchida pelo fundo
## Bordas
- border-image-source
- border-image-width
- border-image-repeat
- border-image-outset
- border-image-slice

## Fontes
- @font-face
    - adicionar arquivo de fonte ao projeto
    ~~~css
    @font-face {
        font-family: batata;
        src: url(..caminho);
    }
    ~~~
- @import url()
- font-size
- font-style
    - normal
    - italic
    - oblique
- font-weight
    - posso utilizar números/valores
    - normal
    - bold
- line-height
    - espaço entre linhas

## Textos
- **text-transform**
    - capitalize: primeiro caractere de cada palavra em maiúsculo
    - uppercase: caixa alta em todo o texto
    - lowercase: letra minúscula
    - none: padrão
- **text-align**
    - alinha o texto no elemento
    - center, left, right, justify
- **text-decoration**
    - é uma propriedade abreviada de
        - line
        - style
        - color
        - thickness
- **text-ident**
    - define o recuo da primeira linha do texto
- **letter-spacing e word-spacing**
    - espaçamento entre cada caracter e cada palavra
- **white-space**
    - define os espaços em branco
- **word-wrap**
    - quebra de palavras
- **word-break**
    - quebra de linhas
- **writing-mode**
    - orientação do texto (vertical ou horizontal)
- **text-overflow**
    - como mostrar para o usuário que ele tem mais texto para visualizar (cortado por conta do overflow)
    - clip, ellipsis e string
## Sombras
- **box-shadow**
    - box-shadow: 30px 30px 10px 5px red;
    - onde: x y desfoque propagação cor;
- **text-shadow**
    - text-shadow: 5px 5px 5px rgb(174, 76, 59);
## Outros
- **opacity**
    - nível de opacidade (transparencia) de um elemento