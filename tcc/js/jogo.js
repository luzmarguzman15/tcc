const roleta = document.getElementById('roleta');
const btnGirar = document.getElementById('btn-girar');
const resultado = document.getElementById('resultado');


const fatias = [
    { nome: '50%', chance: 3,  anguloCentro: 0   }, // Fatia 0 (Vermelha - Única e difícil)
    { nome: '25%', chance: 8,  anguloCentro: 315 }, // Fatia 1 (Amarela)
    { nome: '10%', chance: 12, anguloCentro: 270 }, // Fatia 2 (Verde)
    { nome: '2%',  chance: 22, anguloCentro: 225 }, // Fatia 3 (Azul)
    { nome: '25%', chance: 9,  anguloCentro: 180 }, // Fatia 4 (Amarela)
    { nome: '10%', chance: 12, anguloCentro: 135 }, // Fatia 5 (Verde)
    { nome: '2%',  chance: 22, anguloCentro: 90  }, // Fatia 6 (Azul)
    { nome: '10%', chance: 12, anguloCentro: 45  }  // Fatia 7 (Verde)
];

let rotacaoAtual = 0;

function sortearFatia() {
    const numeroAleatorio = Math.random() * 100;
    let somaChances = 0;

    for (let fatia of fatias) {
        somaChances += fatia.chance;
        if (numeroAleatorio <= somaChances) {
            return fatia;
        }
    }
    return fatias;
}

btnGirar.addEventListener('click', () => {
    btnGirar.disabled = true;
    resultado.textContent = 'Girando...';

    
    const fatiaSorteada = sortearFatia();

    
    const variacao = Math.floor(Math.random() * 33) - 16;
    const anguloDestino = (fatiaSorteada.anguloCentro + variacao + 360) % 360;

    
    const voltasExtras = 360 * 6;
    const diferencaAngulo = (360 - (rotacaoAtual % 360) + anguloDestino) % 360;
    rotacaoAtual += voltasExtras + diferencaAngulo;

    
    roleta.style.transform = `rotate(${rotacaoAtual}deg)`;

    
    setTimeout(() => {
        resultado.textContent = `Parabéns! Você ganhou ${fatiaSorteada.nome} de desconto!`;
        btnGirar.disabled = false;
    }, 4500);
});
