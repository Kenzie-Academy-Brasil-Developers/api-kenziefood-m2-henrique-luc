import { Vitrine } from "../models/Vitrine.js"
import { VitrineView } from "../views/VitrineView.js"

const FiltroPesquisa = class Pesquisa {

    static async pesquisa(input) {
        
        const inputValue = input.value.toLowerCase();

        const listaProdutos = await Vitrine.listaDeProdutos;

        let produtosInclusos = []

        for(const produtos of listaProdutos){
            const nomeProdutoLowerCase = await produtos.nome.toLowerCase();
            const categoriaProdutoLowerCase = await produtos.categoria.toLowerCase();

            const includesNome = await nomeProdutoLowerCase.includes(inputValue);
            const includesCategoria = await categoriaProdutoLowerCase.includes(inputValue);

            if(includesNome || includesCategoria){
                produtosInclusos.push(produtos)
            }
        }

        VitrineView.criaVitrine(produtosInclusos)

    }
}

export { FiltroPesquisa }