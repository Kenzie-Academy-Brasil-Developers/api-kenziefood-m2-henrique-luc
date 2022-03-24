//import { FiltroPesquisa } from ""
import { Usuario } from "./assets/models/Usuario.js";
import { Api } from "./assets/api/Api.js";

import { VitrineController } from "./assets/controllers/VitrineController.js";
import { Carrinho } from "./assets/models/Carrinho.js";
import { VitrineView } from "./assets/views/VitrineView.js";
import { Vitrine } from "./assets/models/Vitrine.js"


//FiltroPesquisa.pesquisa()

await VitrineView.criaVitrine()
//await VitrineView.pesquisaVitrine('morango')
// await VitrineController.eventos()


const produtosPrivados = await Api.getProdutosPrivados()
console.log(produtosPrivados)




    


