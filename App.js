import { loginCadastro } from "./assets/controllers/loginController.js";
import { Api } from "./assets/api/Api.js";
import { LogoutUsuario } from "./assets/controllers/logoutController.js";
import { TelaLogin } from "./assets/controllers/ModalLoginController.js"

// await Api.login("admin@gmail.com", "1234")
//Usuario.logoutUsuario()

const loginBotao = new loginCadastro("login")
loginBotao.setaBotao()

const cadastroBotao = new loginCadastro("cadastro")
cadastroBotao.setaBotao()

const logout = new LogoutUsuario("logout", "login", "cadastro", "ancoraAdmim")
logout.setaBotao()

loginCadastro.verificaStatus(loginBotao.apagaBotao(), cadastroBotao.apagaBotao())

import { VitrineController } from "./assets/controllers/VitrineController.js";
import { Carrinho } from "./assets/models/Carrinho.js";
import { VitrineView } from "./assets/views/VitrineView.js";

await VitrineView.criaVitrine()
// await VitrineView.pesquisaVitrine('morango')
// await VitrineController.eventos()

// await Carrinho.addProduto(3)
// console.log(Carrinho.getListaCarrinho())


    

export{loginBotao, cadastroBotao, logout}