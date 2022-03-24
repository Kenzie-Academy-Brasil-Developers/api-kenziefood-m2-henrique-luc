import { Vitrine } from "../models/Vitrine.js";

const FiltroCategoria = class FiltroCategoria {

    static async categoria(botao) {

        const listaProdutos = await Vitrine.listaDeProdutos;

        const button = botao.children[1]
        const buttonValue = button.innerText
  
        for(const produtos of listaProdutos){
            const categoria = await produtos.categoria
            
            const produtosFiltrados = listaProdutos.filter(() => {
                if(categoria === buttonValue){
                    console.log('oi')
                }
            })

           
        }
    }
}

export { FiltroCategoria }