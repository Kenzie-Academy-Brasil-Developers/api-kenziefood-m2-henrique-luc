import { Produto } from "../models/Produto.js";
import { Vitrine } from "../models/Vitrine.js";
import { CardView } from "./CardView.js";

const VitrineView = class VitrineView {



    static async criaVitrine(cat = 'todos') {

        const listaDeProdutos = await Vitrine.listaDeProdutos;
        const tagHtml = document.getElementById('vitrine-cards');
        tagHtml.innerHTML = "";

        listaDeProdutos.forEach(produto => {

            if(cat.toLowerCase() === produto.categoria.toLowerCase() 
                || cat.toLowerCase() === 'todos') {                  

                const {
                    nome, 
                    categoria, 
                    id, imagem, 
                    descricao, 
                    preco    
                   } = produto;                   
   
               const p = new Produto(nome, descricao, categoria, preco, imagem, id );
               const cardView = new CardView(p);
               tagHtml.innerHTML += cardView.template();
            }            
        })

    }

}

export { VitrineView }