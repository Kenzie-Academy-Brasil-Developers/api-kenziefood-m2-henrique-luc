const ProductModalController = class ProductModalController {

    static eventos() {

        const botaoFechar = document.getElementById('modal-botao-fechar');
        const tagModal = document.getElementById('modal');
        botaoFechar.addEventListener('click', () => {
            
       

            console.log("CLICKOSIOSDI")
        })
    }
}

export { ProductModalController }