import { Vitrine } from "../models/Vitrine.js";
import { VitrineView } from "../views/VitrineView.js"

const FiltroCategoria = class FiltroCategoria {

    static async categoria(botao) {

        const listaProdutos = await Vitrine.listaDeProdutos;

        const button = botao.children[1]
        const buttonValue = button.innerText

        let produtosInclusos = []
  
        for(const produtos of listaProdutos){
            const categoria = await produtos.categoria
            
            const includesCategoria = await categoria.includes(buttonValue)
            
            if(includesCategoria){
                produtosInclusos.push(produtos)
            }
        }

        VitrineView.criaVitrine(produtosInclusos)
    }
}

export { FiltroCategoria }