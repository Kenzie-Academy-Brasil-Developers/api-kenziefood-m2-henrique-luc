import { LogoutUsuario } from "./logoutController.js"
import { login } from "./LoginController.js"
import { loginCadastro } from "./LoginController.js"
import { loginBotao, cadastroBotao } from "../../App.js"

const TelaLogin = class TelaLogin{
    constructor(fecharId, inputEmailId, inputSenhaId, botoaLogarId){
        this._fecharId = fecharId
        this._inputEmailId = inputEmailId
        this._inputSenhaId = inputSenhaId
        this._botoaLogarId = botoaLogarId
    }
    get fecharId(){
        return this._fecharId
    }
    set fecharId(valor){
        this._fecharId = valor
    }
    get inputEmailId(){
        return this._inputEmailId
    }
    set inputEmailId(valor){
        this._inputEmailId = valor
    }
    get inputSenhaId(){
        return this._inputSenhaId
    }
    set inputSenhaId(valor){
        this._inputSenhaId = valor
    }
    get botoaLogarId(){
        return this._botoaLogarId
    }
    set botoaLogarId(valor){
        this._botoaLogarId = valor
    }
    fechaTela(){
        const botaoFechar = document.getElementById(this._fecharId)
        console.log(botaoFechar)
        botaoFechar.addEventListener("click", e =>{
            login.fechaModal()
        })
    }
    logar(){
        const botoaLogar = document.getElementById(this._botoaLogarId)
        botoaLogar.addEventListener("click", async (e) =>{
            const inputEmail = document.getElementById(this._inputEmailId)
            const inputSenha = document.getElementById(this._inputSenhaId)
            await Api.login(inputEmail.value, inputSenha.value)
            const logout2 = new LogoutUsuario("logout", "login", "cadastro", "ancoraAdmim")
            logout2.setaBotao()
            loginCadastro.verificaStatus(loginBotao.apagaBotao(), cadastroBotao.apagaBotao())
            login.fechaModal()
        })
    }
}
export{TelaLogin}