import axios from "axios"


export async function getTransactions(token) {
    try {
        console.log(token);
        const response = await axios.get("https://mywalletmarcelo.herokuapp.com/transactions", {
            headers: { "Authorization": `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        switch (error.response.status) {
            case 422:
                throw "Informe os dados corretamente!";
            case 401:
                throw "Acesso negado!";
        }
    }
}

export async function createTransactions(token, transaction) {
    try {
        const response = await axios.post("https://mywalletmarcelo.herokuapp.com/transactions", transaction, {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response;
    } catch (error) {
        switch (error.response.status) {
            case 422:
                throw "Informe os dados corretamente!";
            case 401:
                throw "Acesso negado!";
        }
    }
}