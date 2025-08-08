const senhaCorreta = "senha123";
let entrada = "";

while (entrada !== senhaCorreta) {
    entrada = prompt("Por favor, digite a senha:");

    if (entrada !== senhaCorreta) {
        alert("Senha incorreta! Tente novamente.");
    }
}

alert("Acesso concedido! Bem-vindo(a).");
console.log("O usuário conseguiu acessar o sistema.");