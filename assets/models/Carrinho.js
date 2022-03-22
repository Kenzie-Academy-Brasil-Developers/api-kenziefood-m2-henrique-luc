import { Vitrine } from "./Vitrine.js"

const Carrinho = class Carrinho {

    static listaCarrinho = [];

    static async addProduto(cardId) {

        const listaDeProdutos = await Vitrine.listaDeProdutos;
        
        listaDeProdutos.forEach(produto => {
            // console.log(produto)
            if(produto.id === cardId)
                this.listaCarrinho.push(produto);
        })       
    }

    static async getListaCarrinho() {
        return this.listaCarrinho
    }
}

export { Carrinho };