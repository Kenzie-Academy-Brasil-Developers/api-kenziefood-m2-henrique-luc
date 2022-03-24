import { Usuario } from "../models/Usuario.js";

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

        console.log(response)
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

        console.log(response)
    }



    static async excluirProduto(id) {

        const response = await fetch(`${Api.PATH}/my/products/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${Usuario.token}`
                }
            });

        console.log(response)
    }

}

export { Api };