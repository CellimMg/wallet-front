import Body from "../commom/Body.js";
import FormField from "../commom/FormField.js";
import Button from "../commom/Button.js";
import TopBar from "../commom/TopBar.js";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from "react";
import { createTransactions } from "./TransactionPageController.js";
import UserContext from "../../../context/UserContext.js";
import styledComponents from "styled-components";

export default function TransactionPage() {

    const { state } = useLocation();
    const navigate = useNavigate();
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");

    const { user } = useContext(UserContext);

    useEffect(() => {
        if (!user.token) return navigate("/signin");
    }, []);

    async function onSubmitForm(event) {
        event.preventDefault();
        try {
            await createTransactions(user._id, descricao, valor, state.type, user.token);
            setValor("");
            setDescricao("");
            alert("Transação salva com sucesso!");
        } catch (error) {
            alert(error);
        }
    }

    return (
        <Body>
            <TopBar>
                <span>Nova {state.type === "in" ? "entrada" : "saída"}</span>
            </TopBar>
            <form onSubmit={onSubmitForm}>
                <FormField onChange={e => setValor(e.target.value)} value={valor} style={{ marginTop: "20px" }} placeholder="Valor" />
                <FormField onChange={e => setDescricao(e.target.value)} value={descricao} placeholder="Descrição" />
                <Button>Salvar {state.type === "in" ? "entrada" : "saída"}</Button>
            </form>
            <div style={{ flexGrow: "1" }}>

            </div>
        </Body>
    );
}


