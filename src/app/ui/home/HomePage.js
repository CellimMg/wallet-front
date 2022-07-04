import styledComponents from "styled-components";
import Body from "../commom/Body.js";
import TopBar from "../commom/TopBar.js";
import Button from "../commom/Button.js";
import OutIcon from "../../../assets/out_icon.svg";
import AddIcon from "../../../assets/add_icon.svg";
import RemoveIcon from "../../../assets/remove-circle-outline.svg";
import UserContext from "../../../context/UserContext.js";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect  } from "react";
import { getTransactions } from "./HomePageController.js";


export default function HomePage() {


    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
                const promise = getTransactions(user.token);
                promise.then(response => {
                    const {transactions} = response;
                    console.log(transactions);
                    setTransactions([...transactions]);
                });
                promise.catch(error => alert(error));
    }, []);

    return (
        <Body>
            <TopBar>
                <span>Olá, {user.name}</span>
                <Icon src={OutIcon} alt="Icon" />
            </TopBar>
            <Board>
                {transactions.length === 0 ? "Não há registros de entrada ou saída" : transactions.map(transaction => <div></div>)}
            </Board>
            <Actions>
                <Button onClick={() => navigate("/transaction", {state: {type: "in"}})} style={{ padding: "10px", height: "115px", alignItems: "flex-start", justifyContent: "space-between" }}>
                    <Icon src={AddIcon} alt="Icon" />
                    Nova<br />saída
                </Button>
                <div style={{ width: "20px" }}></div>
                <Button onClick={() => navigate("/transaction", {state: {type: "out"}})} style={{ padding: "10px", height: "115px", alignItems: "flex-start", justifyContent: "space-between" }}>
                    <Icon src={RemoveIcon} alt="Icon" />
                    Nova<br />saída
                </Button>
            </Actions>
        </Body>
    );

}

const Actions = styledComponents.div`
    height: 115px;
    width: 100%;
    display: flex;
`;

const Board = styledComponents.div`
    margin-bottom: 13px;
    flex-grow: 1;
    width: 100%;
    background-color: white;
    border-radius: 5px;
    color: #868686;
    font-size: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Icon = styledComponents.img`
    height: 30px;
    width: 29px;
    &:hover{
        cursor: pointer;
    }
`;



