var nome = "Maria";
function dizerOla() {
    var saudacao = "Olá";
    console.log(`${saudacao}, ${nome}.`);
}
dizerOla(); // saída: Olá, Maria.
console.log(saudacao); // Erro: saudacao is not defined

/**************************************************************/

// var nome;
console.log(nome);
var nome = "Ana";

/**************************************************************/

let idade = 20;
if(idade) {
    let peso = 55;
    console.log(idade); // 20
    console.log(peso); // 55
}
console.log(peso); // Erro: peso is not defined

/**************************************************************/

const x = {
    // chave: "Valor";
    nome: "João",
    idade: 20,
    "cidade": "São Paulo",
}

console.log(x.nome); // Saída: João
console.log(x["nome"]); // Saída: João
console.log(x.idade); // Saída: 20
console.log(x.cidade); // Saída: São Paulo
console.log(x); // Saída: { nome: 'João', idade: 20, cidade: 'São Paulo' }