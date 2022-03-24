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

import { VitrineView } from "./assets/views/VitrineView.js";

await VitrineView.criaVitrine()
// await VitrineView.pesquisaVitrine('morango')
// await VitrineController.eventos()


    

