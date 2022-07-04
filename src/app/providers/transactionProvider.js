import axios from "axios"


export async function getTransactions(token){
    try {
        const response = await axios.get("http://localhost:5000/transactions", {
        headers: { Authorization: `Bearer ${token}` }
    });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function createTransactions(token, transaction){
    try {

        const response = await axios.post("http://localhost:5000/transactions", transaction, {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response;
    } catch (error) {
        throw error;
    }
}