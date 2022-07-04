import styledComponents from "styled-components";
import Body from "../commom/Body.js";
import TopBar from "../commom/TopBar.js";
import Button from "../commom/Button.js";
import OutIcon from "../../../assets/out_icon.svg";
import AddIcon from "../../../assets/add_icon.svg";
import RemoveIcon from "../../../assets/remove-circle-outline.svg";
import UserContext from "../../../context/UserContext.js";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { getTransactions } from "./HomePageController.js";


export default function HomePage() {


    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {

        if (!user.token) return navigate("/signin");
        const promise = getTransactions(user.token, user.uid);
        promise.then(response => {
            const { transactions } = response;
            console.log(transactions);
            setTransactions([...transactions]);
        });
        promise.catch(error => alert(error));
    }, []);

    function signout() {
        setUser({});
        navigate("/signin");
    }

    return (
        <Body>
            <TopBar>
                <span>Olá, {user.name}</span>
                <Icon onClick={signout} src={OutIcon} alt="Icon" />
            </TopBar>
            <Board>

                {transactions.length === 0 ? "Não há registros de entrada ou saída" : <Tyles> {transactions.map(transaction => <Tyle>
                    <DateCell>{transaction.date}</DateCell>
                    <DescCell>{transaction.description}</DescCell>
                    <ValueCell type={transaction.type}>{transaction.value}</ValueCell>
                </Tyle>)} </Tyles>}



                {transactions.length === 0 ? <></> : <TotalTyle>
                    <span style={{ color: "#000000", fontWeight: "700" }}>Total: </span>
                    <span>{transactions.reduce((a, b) => b.type == "in" ? a + b.value : a - b.value, 0)}</span>
                </TotalTyle>}
            </Board>
            <Actions>
                <Button onClick={() => navigate("/transaction", { state: { type: "in" } })} style={{ textAlign: "start", padding: "10px", height: "115px", alignItems: "flex-start", justifyContent: "space-between" }}>
                    <Icon src={AddIcon} alt="Icon" />
                    Nova<br />entrada
                </Button>
                <div style={{ width: "20px" }}></div>
                <Button onClick={() => navigate("/transaction", { state: { type: "out" } })} style={{ textAlign: "start", padding: "10px", height: "115px", alignItems: "flex-start", justifyContent: "space-between" }}>
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

const Tyles = styledComponents.div`
    flex-grow: 1;
    width: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Tyle = styledComponents.div`
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 8px;
`;

const DateCell = styledComponents.span`
    color: #C6C6C6;
    font-size: 16px;
    margin-right: 8px;
`;

const DescCell = styledComponents.span`
    color:#000000;
    font-size: 16px;
`;

const ValueCell = styledComponents.span`
    color: ${props => (props.type == "out" ? "#C70000" : "#03AC00")};
    font-size: 16px;
    font-weight: 400;
    flex-grow: 1;
    text-align: end;
`;
const Board = styledComponents.div`
    max-height: calc(100% - 170px);
    padding: 15px;
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
    flex-flow: column;
`;

const Icon = styledComponents.img`
    height: 30px;
    width: 29px;
    &:hover{
        cursor: pointer;
    }
`;

const TotalTyle = styledComponents.div`


height: 30px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
font-color: #000000;
font-size: 17px;
font-weight: 700;

    span{
        color: #03AC00;
        font-size: 17px;
    }
`;


