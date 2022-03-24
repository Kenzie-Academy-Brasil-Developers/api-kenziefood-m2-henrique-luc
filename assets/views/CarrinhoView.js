import { CarrinhoController } from "../controllers/CarrinhoController.js";
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

        this.adicionaRodapePreco(); 

        CarrinhoController.eventos();
    }

    static adicionaRodapePreco() {

        const tagHtml = document.getElementById('container_carrinho-lista');
        
        tagHtml.innerHTML +=`
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
    }


    static adicionaRodapeVazio() {

        const tagHtml = document.getElementById('container_carrinho-lista');
        tagHtml.innerHTML = "";
        tagHtml.innerHTML +=`
        <section class="container_carrinho-vazio"> 
            <figure>
                <img src="../assets/img/icone shopping bag.svg" alt="shopping bag">
                <figcaption>shopping bag</figcaption>
            </figure>
            <h3>Por enquanto não temos produtos no carrinho</h3>
        </section>`
    }    
}

export { CarrinhoView }