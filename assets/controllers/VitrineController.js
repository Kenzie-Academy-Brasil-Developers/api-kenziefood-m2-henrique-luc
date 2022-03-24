import { Carrinho } from "../models/Carrinho.js";
import { Produto } from "../models/Produto.js";
import { Vitrine } from "../models/Vitrine.js";
import { CarrinhoView } from "../views/CarrinhoView.js";


const VitrineController = class VitrineController {


     static eventos() {

        const botoesAdicionarCarrinho 
        = Array.from(document.querySelectorAll('.vitrine_cards-card-add-carrinho'));
        
        botoesAdicionarCarrinho.forEach(botao => {
            botao.addEventListener('click', async (e) => {

                const produtoId = e.path[3].id;
                console.log(produtoId);

                const lista = await Vitrine.listaDeProdutos;
                const produtoObj = lista.find(p => parseInt(p.id) === parseInt(produtoId));
               
                Carrinho.addProduto(produtoObj);
                // console.log(Carrinho.getListaCarrinho()); 
                
                CarrinhoView.criaTemplate()

            })
        });
    }

}

export { VitrineController }