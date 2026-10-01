
document.addEventListener("DOMContentLoaded", () => {
    
    
    const botoesComprar = document.querySelectorAll(".btn-buy");

    botoesComprar.forEach((botao, index) => {
        botao.addEventListener("click", () => {
            alert(`Produto ${index + 1} adicionado ao carrinho!`);
        });
    });

});


