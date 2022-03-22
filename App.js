
import { Carrinho } from "./models/Carrinho.js"


await Carrinho.addProduto(2)
await Carrinho.addProduto(4)

const listaCarrinho = await Carrinho.getListaCarrinho()

console.log(listaCarrinho)

    

