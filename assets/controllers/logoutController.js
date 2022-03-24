import { Usuario } from "../models/Usuario.js";
const LogoutUsuario = class LogoutUsuario{
    constructor(id,loginId,cadastroId, ancoraAdmimId) {
        this._id = id;
        this._loginId = loginId;
        this._cadastroId = cadastroId;
        this._ancoraAdmimId = ancoraAdmimId;
    }

    get id(){
        return this._id;
    }
    set id(valor){
        this._id = valor;
    }

    get loginId(){
        return this._loginId;
    }
    set loginId(valor){
        this._loginId = valor;
    }

    get cadastroId(){
        return this._cadastroId;
    }
    set cadastroId(valor){
        this._cadastroId = valor;
    }

    get ancoraAdmimId(){
        return this._ancoraAdmimId;
    }
    set ancoraAdmimId(valor){
        this._ancoraAdmimId = valor;
    }

    setaBotao(){
        const element = document.getElementById(this._id)
        
        element.addEventListener("click", e =>{
            this.desloga(element)
        })
    }

    desloga(element){
        const elementLogin = document.getElementById(this._loginId)
        const elementCadastro = document.getElementById(this._cadastroId)
        const elementAncoraAdmimId = document.getElementById(this._ancoraAdmimId)
        Usuario.logoutUsuario()
        elementLogin.style.display = "flex"
        elementCadastro.style.display = "flex"
        elementAncoraAdmimId.style.display = "none"
        element.style.display = "none"
    }
}

export{LogoutUsuario}