import { Api } from "../api/Api.js";

const Vitrine = class Vitrine {

    static listaDeProdutos = Api.getProdutosPublicos();

    static async getProdutoPorId(produtoId) {

        const lista = await this.listaDeProdutos;
        const produto = lista.find(produto => produto.id === produtoId);
        return produto;
    }
};

export { Vitrine };