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

        tagHtml.innerHTML += `
        <section class="container_carrinho-bottom">
            <div class="container_carrinho-bottom-quantidade">
                <h3>Quantidade</h3>
                <span>${Carrinho.quantidade()}</span>
            </div>

            <div class="container_carrinho-bottom-total">
                <h3>Total</h3>
                <span>${Carrinho.valorTotal()}</span>
            </div>
        </section>`

        console.log(Carrinho.listaCarrinho)
    }

    
}

export { CarrinhoView }