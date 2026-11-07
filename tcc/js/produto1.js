let qtd = 0;
const qtdEl = document.getElementById('qtd');
const estoqueEl = document.getElementById('estoque');
const btn = document.getElementById('btn-comprar');

function atualizar(){
  qtdEl.innerText = qtd;
  if(qtd === 0){
    estoqueEl.innerText = "Fora de estoque";
    estoqueEl.style.color = "#cc0000";
    btn.disabled = true;
  } else {
    estoqueEl.innerText = qtd + " em estoque";
    estoqueEl.style.color = "#16a34a";
    btn.disabled = false;
  }
}

document.getElementById('mais').onclick = () => { qtd++; atualizar(); }
document.getElementById('menos').onclick = () => { if(qtd>0){ qtd--; atualizar(); } }

btn.onclick = () => {
  window.location.href = `https://wa.me/5542999999999?text=Quero COMPRAR ${qtd}x ENGATE CRUZE HATCH 2017`;
}

atualizar();