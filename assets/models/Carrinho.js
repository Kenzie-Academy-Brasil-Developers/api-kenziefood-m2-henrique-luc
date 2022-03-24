import { Vitrine } from "./Vitrine.js"

const Carrinho = class Carrinho {

    static listaCarrinho = [];

    // static async addProduto(cardId) {

    //     const listaDeProdutos = await Vitrine.listaDeProdutos;

    //     listaDeProdutos.forEach(produto => {
    //         // console.log(produto)
    //         if(produto.id === cardId)
    //             this.listaCarrinho.push(produto);
    //     })       
    // }

    static addProduto(produto) {
        this.listaCarrinho.push(produto);
    }

    static getListaCarrinho() {
        return this.listaCarrinho
    }

    static quantidade() {
        return this.listaCarrinho.length;
    }

    static valorTotal() {

        const total = this.listaCarrinho
            .reduce((acc, cur) => acc + cur.preco, 0);

        return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    static excluirProduto(produtoId) {

        const id = produtoId.replace("car-", "")
        this.listaCarrinho = this.listaCarrinho.filter(produto => parseInt(produto.id) !== parseInt(id))
        
    }
}

export { Carrinho };