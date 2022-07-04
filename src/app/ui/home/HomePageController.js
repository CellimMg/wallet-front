import { getTransactions as getTransactionsProvider } from "../../providers/transactionProvider.js";


export async function getTransactions(token, uid) {
    try {
        const response = await getTransactionsProvider(token, uid);
        return response;
    } catch (error) {
        throw (error);
    }
}