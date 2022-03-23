<<<<<<< HEAD

import { Carrinho } from "./assets/models/Carrinho.js"
import { ProductController } from "./assets/controllers/ProductController.js"

console.log("Oi")

await Carrinho.addProduto(2)
await Carrinho.addProduto(4)

const listaCarrinho = await Carrinho.getListaCarrinho()

const productController = new ProductController(3)
// productController.eventos()



console.log(listaCarrinho)

    

=======
>>>>>>> 4da7ae8b15a9c378e4b948dd7ccbefc4dfe01c01
