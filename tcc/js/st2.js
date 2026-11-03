const busca = document.getElementById('busca');
const cards = document.querySelectorAll('.card');

busca.addEventListener('input', () => {
  const termo = busca.value.toLowerCase().trim();
  cards.forEach(card => {
    const nome = card.dataset.nome;
    const match = nome.includes(termo);
    card.style.display = match ? 'flex' : 'none';
    card.style.flexDirection = 'column';
    if(match){
      card.animate([{transform:'scale(0.95)', opacity:0.5},{transform:'scale(1)', opacity:1}], {duration:250});
    }
  });
});

cards.forEach(card => {
  card.querySelector('.btn-card').addEventListener('click', () => {
    const nome = card.querySelector('h3').innerText;
    alert(`Você clicou em: ${nome}\n\nAqui abriria a página do produto.`);
  });
});