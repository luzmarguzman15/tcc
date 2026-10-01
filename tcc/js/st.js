
document.addEventListener('DOMContentLoaded', () => {
    
   
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const btnProducts = document.getElementById('btnProducts');
    const cards = document.querySelectorAll('.category-card');

    function filtrarProdutos() {
        const termoBusca = searchInput.value.toLowerCase().trim();

        cards.forEach(card => {
            const nomeProduto = card.querySelector('p').textContent.toLowerCase();
            
            if (nomeProduto.includes(termoBusca)) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none';  
            }
        });
    }


    searchInput.addEventListener('input', filtrarProdutos);

    searchBtn.addEventListener('click', filtrarProdutos);

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const categoria = card.getAttribute('data-name');
            alert(`Você selecionou a categoria: ${card.querySelector('p').textContent}`);
        });
    });

    
    btnProducts.addEventListener('click', () => {
        alert('Redirecionando para a seção de todos os produtos!');
    });
});

const botaoOtto = document.getElementById('btn-otto');

botaoOtto.addEventListener('click', () => {
  alert('Você clicou no botão da Otto Acessórios!');
});


const botao = document.getElementById('btn-otto');

botao.addEventListener('click', () => {
  console.log('Botão personalizado clicado com sucesso!');
  alert('Você clicou no botão da Otto Acessórios!');
});
