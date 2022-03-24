import { Vitrine } from "../models/Vitrine.js"

const FiltroPesquisa = class Pesquisa {

    static async pesquisa() {
        const input = document.querySelector('.pesquisa_produto input');
        const inputValue = input.value.toLowerCase();

        const listaProdutos = await Vitrine.listaDeProdutos;

        for(const produtos of listaProdutos){
            const nomeProdutoLowerCase = await produtos.nome.toLowerCase();
            const categoriaProdutoLowerCase = await produtos.categoria.toLowerCase();

            const includesNome = await nomeProdutoLowerCase.includes(inputValue);
            const includesCategoria = await categoriaProdutoLowerCase.includes(inputValue);
            
            if(includesNome || includesCategoria) {
                
            }
        }

    }
}

export { FiltroPesquisa }