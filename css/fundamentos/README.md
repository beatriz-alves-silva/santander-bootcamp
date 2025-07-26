# Fundamentos

- Declaração do CSS
    - **inline**: é utilizado com o atributo *style* dentro das tags HTML
    - **interno**: o código CSS é adicionado dentro da tag *head*, utilizando a tag *style* e colocando as regras dentro dessa área
    - **externo**: o arquivo .css contém todas as regras CSS e é referenciado no HTML com a tag *link*



- Seletores
    - **Tipo/Tag**:
        ~~~ css
        h1 {
            background: red;
        }
        ~~~
    - **ID**
        ~~~ css
        #texto-principal {
            background: blue;
        }
        ~~~
    - **Classes**
        ~~~ css
        .paragrafos {
            background: green;
        }
        ~~~
    - **Universais**
        ~~~ css
        * {
            font-weight: bold;
        }
        ~~~
    - **Atributos**
        ~~~ css
        /* qualquer atributo com esse nome*/
        [title] {
            color: black;
        }
        /* busca a palavra exata definida no atributo */
        [title="logotipo"] {
            color: blue;
        }
        /* busca a palavra exata ou ela entre espaços
           o |= busca a palavra exata ou ela entre -
        */
        [title~="jogo"] {
            color: red;
        }
        ~~~