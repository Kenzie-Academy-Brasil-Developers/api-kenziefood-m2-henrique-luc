const ProductModalView = class ProductModalView {

    constructor(productController, tagHtml = "modal") {
        this._productController = productController;
        this._tagHtml = tagHtml;
    }

    async criarModal() {

        const html = document.getElementById(this._tagHtml);

        if(this._productController.produtoId) {

            html.innerHTML = "" ;
            html.innerHTML += this._templateEdit();
            this._productController.eventos();

        }else {
            html.innerHTML = "" ;
            html.innerHTML += this._templateRegister();
            this._productController.eventos();
        }
    }

    _templateEdit() {
        return `

        <section class="form-cadastro">

        <div class="form-cadastro__titulo">
            <h3>Edição de produto</h3>
            <button>x</button>
        </div>

        <form action="">
            <label for="nome">Nome do produto</label>
            <input type="text" name="nome" placeholder="Nome do produto" id="nome-produto" />

            <label for="descricao">Descrição</label>
            <input type="text" name="descricao" placeholder="Descrição" id="descricao-produto" />

            <div class="form-cadastro__categorias">

                <h4>Categorias</h4>

                <div>
                    <input type="checkbox" class="cadastrar-produtos" id="check-panificadora" name="panificadora" value="panificadora" checked="checked">
                    <label for="panificadora">Panificadora</label>

                    <input type="checkbox" class="cadastrar-produtos" id="check-frutas" name="frutas" value="frutas">
                    <label for="frutas">Frutas</label>

                    <input type="checkbox" class="cadastrar-produtos" id="check-bebidas" name="check_3" value="check_3">
                    <label for="check_3">Bebidas</label>

                </div>
            </div>

            <label for="valor">Valor do produto</label>
            <input type="text" name="valor" placeholder="Valor do produto" id="valor-produto" />

            <label for="link">Link da imagem</label>
            <input type="text" name="link" placeholder="Link da imagem" id="imagem-produto" />

            <div class="form-cadastro__botoes">
                <button id="botao-excluir">Excluir</button>
                <button id="botao-salvar-alt">Salvar alterações</button>
            </div>
        </form>

    </section>
        `
    }

    _templateRegister() {
        return`

        <section class="form-cadastro">

        <div class="form-cadastro__titulo">
            <h3>Cadastro de produto</h3>
            <button>x</button>
        </div>

        <form action="">
            <label for="nome">Nome do produto</label>
            <input type="text" name="nome" placeholder="Nome do produto" id="nome-produto" />

            <label for="descricao">Descrição</label>
            <input type="textarea" name="descricao" placeholder="Descrição" id="descricao-produto"/>

            <div class="form-cadastro__categorias">

                <h4>Categorias</h4>

                <div>
                    <input type="checkbox" id="check-panificadora" name="panificadora" value="panificadora" checked="checked">
                    <label for="panificadora">Panificadora</label>

                    <input type="checkbox" id="check-frutas" name="frutas" value="frutas">
                    <label for="frutas">Frutas</label>

                    <input type="checkbox" id="check-bebidas" name="bebidas" value="bebidas">
                    <label for="bebidas">Bebidas</label>

                </div>
            </div>

            <label for="valor">Valor do produto</label>
            <input type="text" name="valor" placeholder="Valor do produto" id="valor-produto"/>

            <label for="link">Link da imagem</label>
            <input type="text" name="link" placeholder="Link da imagem" id="imagem-produto"/>

            <div class="form-cadastro__botoes">
                <button id="botao-cadastrar-produto">Cadastrar produto</button>
            </div>
        </form>

    </section>`
    }
}

export { ProductModalView }