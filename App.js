import { loginCadastro } from "./assets/controllers/loginController.js";
import { Api } from "./assets/api/Api.js";
import { LogoutUsuario } from "./assets/controllers/logoutController.js";
import { Usuario } from "./assets/models/Usuario.js"

Api.login("admin@gmail.com", "1234")
//Usuario.logoutUsuario()

const login = new loginCadastro("login")
login.setaBotao()

const cadastro = new loginCadastro("cadastro")
cadastro.setaBotao()

const logout = new LogoutUsuario("logout", "login", "cadastro")
logout.setaBotao()

loginCadastro.verificaStatus(login.apagaBotao(), cadastro.apagaBotao())

import { VitrineController } from "./assets/controllers/VitrineController.js";
import { Carrinho } from "./assets/models/Carrinho.js";
import { VitrineView } from "./assets/views/VitrineView.js";

await VitrineView.criaVitrine()
// await VitrineView.pesquisaVitrine('morango')
// await VitrineController.eventos()

// await Carrinho.addProduto(3)
// console.log(Carrinho.getListaCarrinho())


    

