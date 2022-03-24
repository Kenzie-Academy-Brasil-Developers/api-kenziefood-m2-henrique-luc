const Usuario = class {

    // constructor(token, id, nome, avatarUrl) {
    //     this._token     = token;
    //     this._id        = id;
    //     this._nome      = nome;
    //     this._avatarUrl = avatarUrl;
    // }

    static token = localStorage.getItem('token') || ""
    static id = localStorage.getItem('id') || ""

    static logoutUsuario(){
        localStorage.removeItem('token')
    }

    static get token() {
        return this.token;
    }

    // // TOKEN

    // set token(token) {
    //     this._toke = token;
    // }

    // get token() {
    //     return this._token;
    // }

    // // ID

    // set id(id) {
    //     this._id = id;
    // }

    // get id() {
    //     return this._id;
    // }

    // // NOME

    // set nome(nome) {
    //     this._nome = nome;
    // }

    // get nome() {
    //     return this.nome;
    // }

    // // IMAGEM DE AVATAR

    // set avatarUrl(avatarUrl) {
    //     this._avatarUrl = avatarUrl;
    // }

    // get avatarUrl() {
    //     return this._avatarUrl;
    // }


}

export { Usuario }