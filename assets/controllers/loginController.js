import { Modal } from "../models/Modal.js";
//const loginHtml
const login = new Modal("telaLogin", );
const cadastro = new Modal("telaCadastro", );

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
            const ancoraAdmim = document.getElementById("ancoraAdmim")

            ancoraAdmim.style.display = "flex"
            logout.style.display = "flex"
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
        }else{
            cadastro.abreModal();
        }
    }

    apagaBotao(){
        const element = document.getElementById(this._id)

        element.style.display = "none"
    }
}

export{loginCadastro}