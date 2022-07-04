import Body from "../commom/Body.js";
import FormField from "../commom/FormField.js";
import Button from "../commom/Button.js";
import TopBar from "../commom/TopBar.js";

export default function TransactionPage() {
    return (
        <Body>
            <TopBar>
                <span>Nova entrada</span>
            </TopBar>
            <FormField style={{ marginTop: "20px" }} placeholder="Valor" />
            <FormField placeholder="Descrição" />
            <Button>Salvar entrada</Button>
            <div style={{ flexGrow: "1" }}></div>
        </Body>
    );
}