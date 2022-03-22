const Modal = class Modal {

    constructor(titulo, codigoHtml) {
        this._titulo        = titulo;
        this._codigoHtml    = codigoHtml;
        this._id            = "modal";
    }

    abreModal() {

        const elementoHtml = document.getElementById(this._id);

        // Faz tag do Id "Modal" para aparecer na tela
        elementoHtml.style.display = "flex"

        // Faz um reset de seguranca da tag
        elementoHtml.innerHTML = "";

        // Insere o template na tag
        elementoHtml.innerHTML += this._criaTemplate();        
    }

    fechaModal() {

        const elementoHtml = document.getElementById(this._id);
        
        // Limpa a tag responsável por receber o modal
        elementoHtml.innerHTML = "";

        // Seta o display da tag para none, a fim de que ela desapareça
        elementoHtml.style.display = "none"
    }

    _criaTemplate() {
        return this._codigoHtml;
    }
}

export { Modal }