const VitrineController = class VitrineController {


     static async eventos() {

        const botoesAdicionarCarrinho 
        = Array.from(document.querySelectorAll('.vitrine_cards-card-add-carrinho'));
        
        botoesAdicionarCarrinho.forEach(botao => {
            botao.addEventListener('click', (e) => console.log(e.path[3].id))
        });
    }
}

export { VitrineController }