const CardController = class CardController {

    constructor() {
        this._button = document.querySelector('.card__botao');
        this.evento();
    }

    evento() {
        this._button.addEventListener('click', (evento) => {
            const cardId = evento.currentTarget.id;
            Carrinho.addProduto(cardId);           
        })
    }
}

export { CardController }