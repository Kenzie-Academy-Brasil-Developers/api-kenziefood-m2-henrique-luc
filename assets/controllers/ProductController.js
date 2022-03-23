const ProductController = class ProductController {

    constructor(produtoId) {

        this._botaoSalvar       = document.getElementById('botao-salvar-alt');
        this._botaoExcluir      = document.getElementById('botao-excluir');
        this._botaoAdicionar    = document.getElementById('botao-adicionar');
        this._produtoId         = produtoId;
        this.eventos();
    };


    async eventos() {

        if (!this._botaoAdicionar) {

            // EDITAR PRODUTO

            this._botaoSalvar.addEventListener('click', (e) => {
                e.preventDefault();
                const data = this.getDadosInputs();
                console.log(data);
                //Api.editarProduto(data)
            });

            // EXCLUIR

            this._botaoExcluir.addEventListener('click', (e) => {
                e.preventDefault();
                const data = this.getDadosInputs();
                console.log(data);

                //Api.excluirProduto(id)
            });

        } else {

        //   ADICIONAR PRODUTO

         this._botaoAdicionar.addEventListener('click', (e) => {
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
        const categoriaDoProduto = arrayDeCategorias.find(e => e.checked).value;

        const data = {
            id: this._produtoId,
            nome: nomeDoProduto,
            descricao: descricaoDoProduto,
            valor: valorDoProduto,
            imagem: imagemDoProduto,
            categoria: categoriaDoProduto
        };

        return data;
    }

}

export { ProductController }