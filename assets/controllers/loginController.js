import { Modal } from "../models/Modal.js";
import { TelaLogin } from "./ModalLoginController.js";
import { logout } from "../../App.js";

const loginHtml = `<section class="formulario-cadastro">
<section class="formulario-cadastro__cabecalho">
    <p>Login de usuario</p>
    <button id="fechar">x</button>
</section>
<div>
    <label for="email">E-mail</label>
    <input type="email" id="email" class="input" placeholder="Insira um email valido" required>
    <label for="senha">Senha</label>
    <input type="password" id="senha" class="input" placeholder="Insira uma senha" required>
    <button id="entrar">Entrar</button>
</div>
</section>`

const cadastroHtml = `<section class="formulario-cadastro">
<section class="formulario-cadastro__cabecalho">
    <p>Cadastro de usuario</p>
    <button id="fechar">x</button>
</section>
<form action="">
    <label for="nome">Nome</label>
    <input type="text" id="nome" class="input" placeholder="Insira seu nome" required>
    <label for="email">E-mail</label>
    <input type="email" id="email" class="input" placeholder="Insira um email valido" required>
    <label for="senha">Senha</label>
    <input type="password" id="senha" class="input" placeholder="Insira uma senha" required>
    <button>Cadastrar</button>
</form>
</section>`
const login = new Modal("telaLogin", loginHtml);
const cadastro = new Modal("telaCadastro", cadastroHtml);

const loginCadastro = class loginCadastro{
    constructor(id) {
        this._id = id;
    }

    get id(){
        return this._id;
    }
    set id(valor){
        this._id = valor;
    }

    static verificaStatus(callOne, callTwo){
        if(localStorage.getItem('token') !== null){
            callOne
            callTwo
            const logout = document.getElementById("logout")
            console.log("aqui", logout)
            const ancoraAdmim = document.getElementById("ancoraAdmim")

            ancoraAdmim.style.display = "flex"
            logout.style.display = "flex"
        }else{
            logout.constroiBotaoLogin()
        }
    }

    setaBotao(){
        const element = document.getElementById(this._id)
        element.addEventListener("click", e =>{
            this.abreTela()
        })
    }

    abreTela(){
        if(this._id === "login"){
            login.abreModal();
            const telaLogin = new TelaLogin("fechar", "email", "senha", "entrar")
            telaLogin.fechaTela()
            telaLogin.logar()
        }else{
            cadastro.abreModal();
        }
    }

    apagaBotao(){
        const element = document.getElementById(this._id)

        element.style.display = "none"
    }
}

export{loginCadastro, login, cadastro}