import { Api } from "../api/Api.js"
import { CardDashboard } from "./CardDashboardView.js";


const DashboardView = class DashboardView {

    static async criaTemplate() {
        const listaProdutos = await Api.getProdutosPrivados();
        const tagHtml = document.getElementById('admin__box-lista');
        tagHtml.innerHTML = "";

        listaProdutos.forEach(produto => {
            const card = new CardDashboard(produto)
            tagHtml.innerHTML += card.template()
        });
    }
}

export { DashboardView }