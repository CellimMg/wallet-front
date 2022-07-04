import axios from "axios"

export async function signin(email, password) {
    try {
        const body = {
            email: email,
            password: password
        }
        const response = await axios.post("http://localhost:5000/signin", body);
        return response.data;
    } catch (error) {
        switch (error.response.status) {
            case 401:
                throw "E-mail e/ou senha incorretos!";
            case 422:
                throw "Informe os dados corretamente!";
            default:
                throw "Algum erro aconteceu, informe ao setor de ti";
        }
    }
}

export async function signup(email, password, name) {
    try {
        const body = {
            email: email,
            password: password,
            name: name
        }
        const response = await axios.post("http://localhost:5000/signup", body);
        return response.data;
    } catch (error) {
        switch (error.response.status) {
            case 401:
                throw "E-mail e/ou senha incorretos!";
            case 422:
                throw "Informe os dados corretamente!";
            default:
                throw "Algum erro aconteceu, informe ao setor de TI";
        }
    }
}
