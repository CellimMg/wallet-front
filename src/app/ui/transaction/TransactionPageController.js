import { createTransactions as createTransactionsProvider } from "../../providers/transactionProvider.js";

export async function createTransactions(uid, description, value, type, token) {
    try {
        const transaction = {
            uid,
            description,
            value,
            type
        }
        const response = await createTransactionsProvider(token, transaction);
        return response;
    } catch (error) {
        throw error;
    }
}