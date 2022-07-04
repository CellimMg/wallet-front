import { signup as signupProvider } from "../../providers/authProvider.js";
import axios from "axios";


export async function signup(email, password, name) {
    try {
        const body = {
            name: name,
            email: email,
            password: password
        };
        const response = await signupProvider(email, password, name);
        return response.data;
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

export function isConfirmPassValid(email) {
    if (email === "") {
        alert("Confirme sua senha!");
        return false;
    }
    return true;
}

export function isNameValid(pass) {
    if (pass === "") {
        alert("Informe seu nome!");
        return false;
    }
    return true;
}

export function passMatch(pass, confirmPass) {
    if (pass === confirmPass) return true;
    else {
        alert("As senhas devem ser iguais");
        return false;
    }
}