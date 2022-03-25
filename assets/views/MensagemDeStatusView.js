const MensagemDeStatusView = class MensagemDeStatusView {
  
    static abreMensagem(mensagemStatus) {
        mensagemStatus.abreModal();
        setTimeout(() => {
            mensagemStatus.fechaModal()
        }, 4000)
    }
}

export { MensagemDeStatusView }