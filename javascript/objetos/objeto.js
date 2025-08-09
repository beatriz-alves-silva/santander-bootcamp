const pessoa = {
    // propriedades (chaves: valor)
    nome: 'João',
    idade: 18,
    habilidades: ["html", "css", "js"], // valor do tipo array
    endereco: { // valor do tipo objeto
        cidade: "São Paulo",
        estado: "SP",
        pais: "Brasil"
    },

    // método (função de um objeto)
    saudacao() {
        console.log(`Olá, me chamo ${this.nome}!`);
    }
};

pessoa.saudacao();

// modificando uma propriedade existente
pessoa.idade = 21;

// adicionando uma nova propriedade
pessoa.disponivel = true;

delete pessoa.habilidades;

console.log(pessoa);