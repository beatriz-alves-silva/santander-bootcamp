// classe do exercício 1
class Carro {
    marca;
    cor;
    gastoPorKM;

    constructor(marca, cor, gastoPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKM = gastoPorKM;
    }

    calcularGastoPercurso(qtdeKM, precoCombustivel) {
        let gastoTotal = (qtdeKM / this.gastoPorKM) * precoCombustivel;
        return gastoTotal;
    }
}

// classe do exercício 2
class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        let IMC = this.peso / (this.altura * this.altura);
        return IMC;
    }

    classificarIMC() {
        let IMC = this.calcularIMC();
        if (IMC < 18.5) {
            return "Abaixo do peso";
        } else if (IMC < 25) {
            return "Peso normal";
        } else if (IMC < 30) {
            return "Acima do peso";
        } else if (IMC < 40) {
            return "Obeso";
        } else {
            return "Obesidade grave"
        }
    }
}

function main() {
    // exercício 1
    const carro1 = new Carro("Fiat", "Branco", 12);
    console.log(carro1);
    console.log(`Valor gasto para a viagem = R$`, carro1.calcularGastoPercurso(70, 5).toFixed(2));

    // exercício 2
    const pessoa1 = new Pessoa("João", 78, 1.73);
    console.log(pessoa1);
    console.log(pessoa1.classificarIMC());
}

main();