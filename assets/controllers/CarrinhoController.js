import { Carrinho } from "../models/Carrinho.js";
import { CarrinhoView } from "../views/CarrinhoView.js";

const CarrinhoController = class CarrinhoController {

    static eventos() {

        const botoesLixeira
            = Array.from(document.querySelectorAll('.botao-lixeira-carrinho'));

        botoesLixeira.forEach(botao => {
            botao.addEventListener('click', (e) => {

                const produtoId = e.path[2].id;
                Carrinho.excluirProduto(produtoId);
                CarrinhoView.criaTemplate();

                if (!Carrinho.getListaCarrinho().length)
                    CarrinhoView.adicionaRodapeVazio();
            })

        })
    }
}

export { CarrinhoController }