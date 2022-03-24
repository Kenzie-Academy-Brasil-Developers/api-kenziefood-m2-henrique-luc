import { FiltroCategoria } from "./FiltroCategoria.js";
import { FiltroPesquisa } from "./FiltroPesquisa.js"
import { VitrineView } from "../views/VitrineView.js";

const buttonTodos = document.querySelector('.botoes_filtro-todos')
const buttonPanificadora = document.querySelector('.botoes_filtro-panificadora')
const buttonFrutas = document.querySelector('.botoes_filtro-frutas')
const buttonBebidas = document.querySelector('.botoes_filtro-bebidas')

buttonTodos.addEventListener('click', () => {
    VitrineView.criaVitrine()
})

buttonPanificadora.addEventListener('click', () => {
    FiltroCategoria.categoria(buttonPanificadora)
})

buttonFrutas.addEventListener('click', () => {
    FiltroCategoria.categoria(buttonFrutas)
})

buttonBebidas.addEventListener('click', () => {
    FiltroCategoria.categoria(buttonBebidas)
})

const input = document.querySelector('.pesquisa_produto input')

input.addEventListener('keydown', () => {
    FiltroPesquisa.pesquisa(input)
})

