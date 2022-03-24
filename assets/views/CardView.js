import { Produto } from "../models/Produto.js";

const CardView = class CardView {

    constructor({nome, descricao, categoria, preco, imagem, id}) {
        this._produto = new Produto(nome, descricao, categoria, preco, imagem, id);
    }

    getCategoriaTemplate() {

        switch(this._produto.categoria) {
            case 'Panificadora':
                return `
                <div class="produto-categoria">
                    <img src="../assets/img/Icone pao.svg" alt="icone panificadora">
                    <span>Panificadora</span>
                </div>`;

            case 'Frutas':
                return `
                <div class="produto-categoria">
                    <img src="../assets/img/icone frutas.svg" alt="icone frutas">
                    <span>Frutas</span>
                </div>`;
            default:
                return `    
                <div class="produto-categoria">
                    <img src="../assets/img/icone bebidas.svg" alt="icone bebidas">
                    <span>Bebidas</span>
                </div>`;
        }
    };


    template() {
        return `
        <div class="vitrine_cards-card" id=${this._produto.id}>

        <figure class="vitrine_cards-card-imagem">
            <img src=${this._produto.imagem} alt="imagem do produto">
            <figcaption>${this._produto.nome}</figcaption>
        </figure>

        <section class="vitrine_cards-botoes">
            <div class = "conteudo-produto-categoria">
                ${this.getCategoriaTemplate()}
            </div>
        </section>
        
        <h3>${this._produto.nome}</h3>
        <p>${this._produto.descricao}</p>
        <div class="vitrine_cards-card-preco">
            <span>R$ ${this._produto.preco}</span>
            <button type="button" class="vitrine_cards-card-add-carrinho">
                <img src="../assets/img/icone carrinho.svg" alt="carrinho">
            </button>
        </div>
    </div>
        `
    }
}

export { CardView }