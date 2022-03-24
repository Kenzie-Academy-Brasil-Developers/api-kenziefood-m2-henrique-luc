import { Usuario } from "./assets/models/Usuario.js";
import { Api } from "./assets/api/Api.js";

import { VitrineController } from "./assets/controllers/VitrineController.js";
import { Carrinho } from "./assets/models/Carrinho.js";
import { VitrineView } from "./assets/views/VitrineView.js";

await VitrineView.criaVitrine()


const produtosPrivados = await Api.getProdutosPrivados()
console.log(produtosPrivados)




    

