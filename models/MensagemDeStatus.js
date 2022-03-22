const MensagemDeStatus = class MensagemDeStatus {

    constructor(mensagem, status = true) {
        this._mensagem  = mensagem;
        this._status    = status;
        this._id        = id;
    }

    abreModal() {

        const elementoHtml = document.getElementById(this._id);

        // Faz tag do Id "Modal" para aparecer na tela
        elementoHtml.style.display = "flex";

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
        elementoHtml.style.display = "none";

    }

    _criaTemplate() {

        if(this._status)
            return `
                <div>
                    <header>Status</header>
                    <p> ${this._mensagem} </p>
                    <div class="mensagem-sucesso"></div>
                </div>`
        else
            return `
                <div>
                    <header>Status</header>
                    <p> ${this._mensagem} </p>
                    <div class="mensagem-erro"></div>
                </div>`
    }
}

export { MensagemDeStatus }