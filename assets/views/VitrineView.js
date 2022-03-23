import { Produto } from "../models/Produto.js";
import { Vitrine } from "../models/Vitrine.js";
import { CardView } from "./CardView.js";

const VitrineView = class VitrineView {



    static async criaVitrine(cat = 'todos') {

        const listaDeProdutos = await Vitrine.listaDeProdutos;
        const tagHtml = document.getElementById('vitrine-cards');
        tagHtml.innerHTML = "";

        // console.log(listaDeProdutos[0])
        // console.log(tagHtml)

        // const { nome, descricao, id, imagem, preco, categoria } = listaDeProdutos[0]

        // const cardView = new CardView(nome, descricao, id, imagem, preco, categoria)
        // console.log(cardView)

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
            //    console.log(p)
               const cardView = new CardView(p);
               console.log(cardView)

               
               tagHtml.innerHTML += cardView.template();
            }
            

        })

    }

}

export { VitrineView }