import { Carrinho } from "../models/Carrinho.js"
import { CardCarrinhoView } from "./CardCarrinhoView.js";

const CarrinhoView = class CarrinhoView {

    static criaTemplate() {

        const listaProdutosCarrinho = Carrinho.getListaCarrinho();
        const tagHtml = document.getElementById('container_carrinho-lista');
        tagHtml.innerHTML = ""

        listaProdutosCarrinho.forEach(produto => {
            const card = new CardCarrinhoView(produto);
            tagHtml.innerHTML += card.template();            
        })
    }
}

export { CarrinhoView }