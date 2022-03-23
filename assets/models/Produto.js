const Produto = class Produto {

    constructor(nome, descricao, categoria, preco, imagem, id) {
        this._nome      = nome;
        this._id        = id;
        this._descricao = descricao;
        this.categoria  = categoria;
        this._preco     = preco;
        this._imagem    = imagem;
    }

    // NOME

    set nome(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

     // ID

     set id(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }

    // DESCRICAO

    set descricao(descricao) {
        this._descricao = descricao;
    }

    get descricao() {
        return this._descricao;
    }

    // CATEGORIA

    set categoria(categoria) {
        this._categoria = categoria;
    }

    get categoria() {
        return this._categoria;
    }

    // PRECO

    set preco(preco) {
        this._preco = preco;
    }

    get preco() {
        return this._preco;
    }

     // IMAGEM DO PRODUTO

     set imagem(imagem) {
        this._imagem = imagem;
    }

    get imagem() {
        return this._imagem;
    }
   
}

export { Produto }