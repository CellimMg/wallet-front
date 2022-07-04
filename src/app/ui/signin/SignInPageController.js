import { signin as signinProvider } from "../../providers/authProvider.js";


export async function signin(email, password) {
    try {
        const response = await signinProvider(email, password);
        return response;
    } catch (error) {
        throw error;
    }
}

export function isEmailValid(email) {
    if (email === "") {
        alert("Informe seu email!");
        return false;
    }
    return true;
}

export function isPassValid(pass) {
    if (pass === "") {
        alert("Informe sua senha!");
        return false;
    }
    return true;
}