//import { FiltroPesquisa } from ""
import { Usuario } from "./assets/models/Usuario.js";
import { Api } from "./assets/api/Api.js";

import { VitrineController } from "./assets/controllers/VitrineController.js";
import { Carrinho } from "./assets/models/Carrinho.js";
import { VitrineView } from "./assets/views/VitrineView.js";
import { Vitrine } from "./assets/models/Vitrine.js"

import {loginCadastro} from "./assets/controllers/LoginController.js"
import { LogoutUsuario } from "./assets/controllers/logoutController.js";

const loginBotao = new loginCadastro("login")
loginBotao.setaBotao()
const cadastroBotao = new loginCadastro("cadastro")
cadastroBotao.setaBotao()

const logout = new LogoutUsuario("logout", "login", "cadastro", "ancoraAdmim")
logout.setaBotao()
logout.setarBotaoAdmin()

loginCadastro.verificaStatus(loginBotao.apagaBotao(), cadastroBotao.apagaBotao())

//FiltroPesquisa.pesquisa()

await VitrineView.criaVitrine()
//await VitrineView.pesquisaVitrine('morango')
// await VitrineController.eventos()


const produtosPrivados = await Api.getProdutosPrivados()
console.log(produtosPrivados)


export{logout, loginBotao, cadastroBotao}

    

