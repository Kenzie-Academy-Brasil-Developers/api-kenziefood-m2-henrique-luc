import { Usuario } from "../models/Usuario.js";
import { MensagemDeStatus } from "../models/MensagemDeStatus.js";
import { MensagemDeStatusView } from "../views/MensagemDeStatusView.js";

const Api = class Api {

    static PATH = "https://kenzie-food-api.herokuapp.com";


    // Retorna produtos da rota pública

    static async getProdutosPublicos() {

        const response = await fetch(`${Api.PATH}/products`);
        const data = await response.json();

        return data;
    }


    // Retorna produtos da rota privada

    static async getProdutosPrivados() {

        const response = await fetch(`${Api.PATH}/my/products`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${Usuario.token}`
                }
            });
        const data = await response.json();

        return data;
    }


    static async login(email, senha) {

        const data = {
            email: email,
            password: senha
        };


        const response = await fetch(`${Api.PATH}/auth/login`,
            {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json'
                },
                'body': JSON.stringify(data)
            });

        const token = await response.json();

        if (token) {
            localStorage.setItem('token', token);
            console.log('Token criado');
        } else {
            console.log('Token não criado');
        }

    }

    static async cadastrarProduto(data) {

        const response = await fetch(`${Api.PATH}/my/products`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Usuario.token}`
                },
                body: JSON.stringify(data)
            });

            if (response) {
                const texto = "Produto cadastrado com sucesso"
                const mensagem = new MensagemDeStatus(texto, true);
                MensagemDeStatusView.abreMensagem(mensagem);
            }
    }


    static async editarProduto(data, id) {

        const response = await fetch(`${Api.PATH}/my/products/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Usuario.token}`
                },
                body: JSON.stringify(data)
            });

        if (response) {
            const texto = "Produto alterado com sucesso"
            const mensagem = new MensagemDeStatus(texto, true);
            MensagemDeStatusView.abreMensagem(mensagem);
        }
    }



    static async excluirProduto(id) {

        const response = await fetch(`${Api.PATH}/my/products/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${Usuario.token}`
                }
            });

            if (response) {
                const texto = "Produto excluído com sucesso"
                const mensagem = new MensagemDeStatus(texto, true);
                MensagemDeStatusView.abreMensagem(mensagem);
            }
    }

}

export { Api };