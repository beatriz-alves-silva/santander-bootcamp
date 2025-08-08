let nomeHeroi = ["Batgirl", "Mera", "Mulher Invisível", "Tempestade", "Estelar", "Gamora", "Feiticeira Escarlate"];
let xp = 0;

function nivel(xp) {
    let nivel = "";
    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }
    return nivel;
}

for (let i = 0; i < nomeHeroi.length; i++){
    xp = Math.floor(Math.random() * 10001);
    console.log(`O Herói de nome ${nomeHeroi[i]} está no nível de`, nivel(xp));

}

