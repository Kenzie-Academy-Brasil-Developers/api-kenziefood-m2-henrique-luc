import { Api } from "../api/Api.js";
import { MensagemDeStatus } from "../models/MensagemDeStatus.js";
import {MensagemDeStatusView} from "../views/MensagemDeStatusView.js"
import { DashboardView } from "../views/DashboardView.js";


const ProductController = class ProductController {

    constructor(produtoId = null) {
        this._produtoId = produtoId;
    };

    get produtoId() {
        return this._produtoId;
    }


    eventos() {

        const tagModal = document.getElementById('modal')

        if (this._produtoId) {

            // EDITAR PRODUTO
            if (document.getElementById('botao-salvar-alt')) {

                const botaoSalvar = document.getElementById('botao-salvar-alt')
                botaoSalvar.addEventListener('click', async (e) => {
                    e.preventDefault();
                    const data = this.getDadosInputs();
                    console.log(data, this._produtoId);
                    await Api.editarProduto(data, this._produtoId)
                    await DashboardView.criaTemplate()
                    tagModal.innerHTML = "";
                    tagModal.style.display = "none";
                   
                });
            }

            // EXCLUIR

            const botaoExcluir = document.getElementById('botao-excluir')
            botaoExcluir.addEventListener('click', async (e) => {
                e.preventDefault();
                console.log(this._produtoId);
                await Api.excluirProduto(this._produtoId);
                await DashboardView.criaTemplate();
                tagModal.innerHTML = "";
                tagModal.style.display = "none";
            });

            if (document.getElementById('botao-excluir-nao')) {
                const botaoNao = document.getElementById('botao-excluir-nao')
                botaoNao.addEventListener('click', () => {
                    tagModal.innerHTML = "";
                    tagModal.style.display = "none"
                })
            }




        } else {

            //   ADICIONAR PRODUTO

            const botaoCadastrar = document.getElementById('botao-cadastrar-produto')
            botaoCadastrar.addEventListener('click', async (e) => {
                e.preventDefault();
                const data = this.getDadosInputs();
                console.log(data);
                await Api.cadastrarProduto(data);
                await DashboardView.criaTemplate();
                tagModal.innerHTML = "";
                tagModal.style.display = "none";
            });

        };

        const botaoFechar = document.getElementById('modal-botao-fechar')
        botaoFechar.addEventListener('click', () => {
            tagModal.innerHTML = "";
            tagModal.style.display = "none";

        })



    };


    getDadosInputs() {

        const nomeDoProduto = document.getElementById('nome-produto').value;
        const descricaoDoProduto = document.getElementById('descricao-produto').value;
        const valorDoProduto = document.getElementById('valor-produto').value;
        const imagemDoProduto = document.getElementById('imagem-produto').value;

        const arrayDeCategorias = Array.from(document.querySelectorAll('.cadastrar-produtos'));
        // const categoriaDoProduto = arrayDeCategorias.find(e => e.checked).value;

        const data = {
            nome: nomeDoProduto,
            descricao: descricaoDoProduto,
            preco: parseFloat(valorDoProduto),
            imagem: imagemDoProduto,
            categoria: "comida"
        };

        if (!data.nome)
            delete data.nome;

        if (!data.descricao)
            delete data.descricao;

        if (!data.preco)
            delete data.preco;

        if (!data.imagem)
            delete data.imagem;

        if (!data.categoria)
            delete data.categoria;

        return data;
    }


}

export { ProductController }