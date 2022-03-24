import { FiltroPesquisa } from "./controllers/FiltroPesquisa.js"
import { VitrineController } from "./assets/controllers/VitrineController.js";
import { Carrinho } from "./assets/models/Carrinho.js";
import { VitrineView } from "./assets/views/VitrineView.js";


await FiltroPesquisa.pesquisa()

await VitrineView.criaVitrine()
// await VitrineView.pesquisaVitrine('morango')
// await VitrineController.eventos()

// await Carrinho.addProduto(3)
// console.log(Carrinho.getListaCarrinho())


    


