import { DashboardView } from "./assets/views/DashboardView.js";
import {Usuario} from "./assets/models/Usuario.js"
import { MensagemDeStatus } from "./assets/models/MensagemDeStatus.js";
import {MensagemDeStatusView} from "./assets/views/MensagemDeStatusView.js"


await DashboardView.criaTemplate()

const logout = document.getElementById("logout")
logout.addEventListener("click", e =>{
    
    window.location.href = "home.html"
    Usuario.logoutUsuario()
})

const home = document.getElementById("home")
home.addEventListener("click", e =>{
    window.location.href = "home.html"
})

