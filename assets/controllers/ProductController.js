const ProductController = class ProductController {

    constructor(produtoId = null) {
        this._produtoId = produtoId;
    };

    get produtoId() {
        return this._produtoId;
    }


    eventos() {


        if (this._produtoId) {

            // EDITAR PRODUTO
            const botaoSalvar = document.getElementById('botao-salvar-alt')
            botaoSalvar.addEventListener('click', (e) => {
                e.preventDefault();
                const data = this.getDadosInputs();
                console.log(data);
                //Api.editarProduto(data)
            });

            // EXCLUIR

            const botaoExcluir = document.getElementById('botao-excluir')
            botaoExcluir.addEventListener('click', (e) => {
                e.preventDefault();
                const data = this.getDadosInputs();
                console.log(data.id);
                //Api.excluirProduto(id)
            });

        } else {

            //   ADICIONAR PRODUTO

            const botaoCadastrar = document.getElementById('botao-cadastrar-produto')
            botaoCadastrar.addEventListener('click', (e) => {
                e.preventDefault();
                const data = this.getDadosInputs();
                console.log(data);
                // Api.adicionarProduto(data)
            });

        };
    };


    getDadosInputs() {

        const nomeDoProduto = document.getElementById('nome-produto').value;
        const descricaoDoProduto = document.getElementById('descricao-produto').value;
        const valorDoProduto = document.getElementById('valor-produto').value;
        const imagemDoProduto = document.getElementById('imagem-produto').value;

        const arrayDeCategorias = Array.from(document.querySelectorAll('.cadastrar-produtos'));
        // const categoriaDoProduto = arrayDeCategorias.find(e => e.checked).value;

        const data = {
            id: this._produtoId,
            nome: nomeDoProduto,
            descricao: descricaoDoProduto,
            valor: valorDoProduto,
            imagem: imagemDoProduto,
            // categoria: categoriaDoProduto
        };

        return data;
    }

}

export { ProductController }