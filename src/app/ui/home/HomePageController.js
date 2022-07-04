import { getTransactions as getTransactionsProvider } from "../../providers/transactionProvider.js";


export async function getTransactions(token){
    try {
        const response = await getTransactionsProvider(token);
        return response;
    } catch (error) {
        throw(error);
    }
}