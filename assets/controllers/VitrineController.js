import { Carrinho } from "../models/Carrinho.js";
import { Vitrine } from "../models/Vitrine.js";


const VitrineController = class VitrineController {


     static eventos() {

        const botoesAdicionarCarrinho 
        = Array.from(document.querySelectorAll('.vitrine_cards-card-add-carrinho'));
        
        botoesAdicionarCarrinho.forEach(botao => {
            botao.addEventListener('click', async (e) => {

                const produtoId = e.path[3].id;
                console.log(produtoId);

                const lista = await Vitrine.listaDeProdutos;
                const produto = lista.find(p => parseInt(p.id) === parseInt(produtoId));

                Carrinho.addProduto(produto);
                console.log(Carrinho.getListaCarrinho());                

            })
        });
    }

}

export { VitrineController }