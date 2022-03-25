import { DashboardView } from "./assets/views/DashboardView.js";
import {Usuario} from "./assets/models/Usuario.js"


await DashboardView.criaTemplate()

const logout = document.getElementById("logout")
logout.addEventListener("click", e =>{
    
    window.location.href = "home.html"
    Usuario.logoutUsuario()
})