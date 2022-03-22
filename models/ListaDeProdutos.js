const ListaDeProdutos = class ListaDeProdutos {

    constructor(arrayDeProdutos = []) {
        this._listaDeProdutos = arrayDeProdutos;
        this._valorTotal = this.getValorTotal();
    }

    get listaDeProdutos() {
        return this._listaDeProdutos;
    }

    // Soma todos os valores de cada produto da lista

    get valorTotal() {
        return this._listaDeProdutos.reduce((cur, prev) => cur.preco + prev, 0);
    }


    inserirProduto(produto) {
        this._listaDeProdutos.push(produto);
    }


    // Remove um produto da lista pelo seu ID

    removerProduto(id) {
        const arrAux = this._listaDeProdutos.filter(e => e.id !== id);
        this._listaDeProdutos = [...arrAux];
    }


    

}

export { ListaDeProdutos }