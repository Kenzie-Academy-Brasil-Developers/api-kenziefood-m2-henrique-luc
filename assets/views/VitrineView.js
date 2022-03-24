import { Produto } from "../models/Produto.js";
import { Vitrine } from "../models/Vitrine.js";
import { CardView } from "./CardView.js";
import { VitrineController } from "../controllers/VitrineController.js";

const VitrineView = class VitrineView {


    static async criaVitrine() {

        const listaDeProdutos = await Vitrine.listaDeProdutos;
        const tagHtml = document.getElementById('vitrine-cards');
        console.log(tagHtml)
        tagHtml.innerHTML = "";

        listaDeProdutos.forEach(produto => {

                const {
                    nome, 
                    categoria, 
                    id,
                    imagem, 
                    descricao, 
                    preco    
                   } = produto;                   
   
               const p = new Produto(nome, descricao, categoria, preco, imagem, id );
               const cardView = new CardView(p);
               tagHtml.innerHTML += cardView.template();
           
        })

        VitrineController.eventos()
    }  

}

export { VitrineView }