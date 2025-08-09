/*  algoritmo que calcula a media de 3 notas de um aluno e classifica
    - menor que 5 reprovado
    - entre 5 e 7 recuperação
    - acima de 7 aprovado
 */

let nota1 = 7;
let nota2 = 6;
let nota3 = 7;
let media = (nota1 + nota2 + nota3) / 3;


function classificarNota (media) {
    let classificacao = "";
    if (media < 5) {
        classificacao = "Reprovado";
    } else if (media < 7) {
        classificacao = "Recuperação";
    } else {
        classificacao = "Aprovado";
    }
    return classificacao;
}

console.log(`Situação do aluno: `, classificarNota(media))
