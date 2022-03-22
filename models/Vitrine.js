import { Api } from "../api/Api.js";

const Vitrine = class Vitrine {

    static listaDeProdutos = Api.getProdutosPublicos();
};

export { Vitrine };