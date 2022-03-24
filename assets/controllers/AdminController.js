import { ProductController } from "./ProductController.js";
import { ProductModalView } from "../views/ProductModalView.js"

const AdminControllers = class AdminControllers {

    static eventos() {
        this.addEventoAdicionar();
        this.addEventosEditar();
        this.addEventosExcluir();
    }

    static addEventosExcluir() {

    }

    static addEventosEditar() {

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