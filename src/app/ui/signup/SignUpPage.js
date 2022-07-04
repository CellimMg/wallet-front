import Body from "../commom/Body.js";
import Logo from "../commom/Logo.js";
import FormField from "../commom/FormField.js";
import Button from "../commom/Button.js";
import RedirectText from "../commom/RedirectText.js";
import { useState } from "react";
import { useNavigate } from "react-router";
import { signup } from "./SignUpPageController.js";
import { isConfirmPassValid, isEmailValid, isNameValid, passMatch, isPassValid } from "./SignUpPageController.js";

export default function SignUpPage() {

    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function onSubmitForm(event) {
        setLoading(true);
        event.preventDefault();
        if (isEmailValid(email) && isPassValid(password) && isConfirmPassValid(confirmPass) && isNameValid(name) && passMatch(password, confirmPass)) {
            try {
                await signup(email, password, name);
                navigate("/signin");
            } catch (error) {
                alert(error);
            }
        }
        setLoading(false);
    }

    return (
        <Body>
            <Logo>MyWallet</Logo>
            <form onSubmit={onSubmitForm}>
                <FormField value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Nome" />
                <FormField value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail" />
                <FormField value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha" />
                <FormField value={confirmPass} onChange={e => setConfirmPass(e.target.value)} type="password" placeholder="Confirme a senha" />
                <Button style={{ marginBottom: "36px" }}>Cadastrar</Button>
            </form>
            <RedirectText>Já tem uma conta? Entre agora!</RedirectText>
        </Body>
    );
}