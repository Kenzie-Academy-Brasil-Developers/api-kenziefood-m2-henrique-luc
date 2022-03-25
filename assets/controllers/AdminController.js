import { ProductController } from "./ProductController.js";
import { ProductModalView } from "../views/ProductModalView.js"
import { Modal } from "../models/Modal.js"

const AdminControllers = class AdminControllers {

    static eventos() {
        this.addEventoAdicionar();
        this.addEventosEditar();
        this.addEventosExcluir();
    }

    static addEventosExcluir() {

        const botoesExcluir
            = Array.from(document.querySelectorAll('.excluir-produto'))

        botoesExcluir.forEach(botao => {
            botao.addEventListener('click', (e) => {
                const produtoId = e.path[3].id;
                const productController = new ProductController(produtoId);

                const productModal = new ProductModalView(productController);
                productModal.criarModalExcluir();
            })
        });

    }

    static addEventosEditar() {

        const botoesEditar
            = Array.from(document.querySelectorAll('.editar-produto'))

        botoesEditar.forEach(botao => {

            botao.addEventListener('click', (e) => {
                const produtoId = e.path[3].id;
                const productController = new ProductController(produtoId);
                const productModal = new ProductModalView(productController);
                productModal.criarModal();
            })
        });

    }

    static addEventoAdicionar() {

        const botaoAdicionar
            = document.getElementById('adicionar-novo-produto');

        botaoAdicionar.addEventListener('click', (e) => {

            const productController = new ProductController();
            const productModal = new ProductModalView(productController);
            productModal.criarModal();
        })
    }
}

export { AdminControllers }