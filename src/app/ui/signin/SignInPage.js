import { useState, useContext } from "react";
import { signin, isEmailValid, isPassValid } from "./SignInPageController.js";
import { useNavigate } from "react-router-dom";
import Body from "../commom/Body.js";
import Logo from "../commom/Logo.js";
import FormField from "../commom/FormField.js";
import Button from "../commom/Button.js";
import RedirectText from "../commom/RedirectText.js";
import UserContext from "../../../context/UserContext.js";

export default function SignInPage() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [loading, setLoading] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    async function onSubmitForm(event) {
        setLoading(true);
        event.preventDefault();
        if (isEmailValid(email) && isPassValid(pass)) {
            try {
                const response = await signin(email, pass);
                setUser(response);
                navigate("/");
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
                <FormField disabled={loading} value={email} placeholder="E-mail" onChange={e => setEmail(e.target.value)} type={"email"}></FormField>
                <FormField disabled={loading} value={pass} placeholder="Senha" onChange={e => setPass(e.target.value)} type={"password"}></FormField>
                <Button disabled={loading} style={{ marginBottom: "36px" }}>Entrar</Button>
            </form>
            <RedirectText onClick={() => navigate("/signup")}>Primeira vez? Cadastre-se!</RedirectText>
        </Body>
    );
}