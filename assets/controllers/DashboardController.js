import { ProductController } from "./ProductController.js";

const DashboardController = class DashboardController {

    constructor() {
        this._iconesDeEdicao = document.querySelectorAll('icone-edicao');
        this._iconesDeRemocao = document.querySelectorAll('icone-remocao');
        this._botaoAdicionar = document.getElementById('adicionar-novo-produto');
        // this._tagModal = document.getElementById('')
    }

    eventos() {


        // ADD EVENTOS NOS ICONES DE EDICAO

        this._botaoAdicionar.addEventListener('click', () => {
            console.log("Entrou")
            // AddProductView.create();
            const productController = new ProductController();
            console.log(productController);

        });


        // ADD EVENTOS NOS ICONES DE EDICAO

        const iconesEdicaoArr = Array.from(this._iconesDeEdicao);

        iconesEdicaoArr.forEach(icone => {

            icone.addEventListener('click', (e) => {
                const produtoId = e.currentTarget;
                // EditProductView.create();
                const productController = new ProductController(produtoId);
                console.log(productController);
            });
        });



        // ADD EVENTOS NOS ICONES DE REMOCAO

        const iconesRemocaoArr = Array.from(this._iconesDeRemocao);

        iconesRemocaoArr.forEach(icone => {

            icone.addEventListener('click', (e) => {
                const produtoId = e.currentTarget;
                // EditProductView.create();
                const productController = new ProductController(produtoId);
            });
        });
    }


}

export { DashboardController }