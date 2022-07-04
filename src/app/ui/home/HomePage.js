import styledComponents from "styled-components";
import Body from "../commom/Body.js";
import TopBar from "../commom/TopBar.js";
import Button from "../commom/Button.js";
import OutIcon from "../../../assets/out_icon.svg";
import AddIcon from "../../../assets/add_icon.svg";
import RemoveIcon from "../../../assets/remove-circle-outline.svg";



export default function HomePage() {

    return (
        <Body>
            <TopBar>
                <span >Olá, fulano</span>
                <Icon src={OutIcon} alt="Icon" />
            </TopBar>
            <Board />
            <Actions>
                <Button style={{ padding: "10px", height: "115px", alignItems: "flex-start", justifyContent: "space-between" }}>
                    <Icon src={AddIcon} alt="Icon" />
                    <span style={{ textAlign: "start", fontSize: "17px" }}>Nova<br />entrada</span>
                </Button>
                <div style={{ width: "20px" }}></div>
                <Button style={{ padding: "10px", height: "115px", alignItems: "flex-start", justifyContent: "space-between" }}>
                    <Icon src={RemoveIcon} alt="Icon" />
                    <span style={{ textAlign: "start", fontSize: "17px" }}>Nova<br />saída</span>
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
`;

const Icon = styledComponents.img`
    height: 30px;
    width: 29px;
    &:hover{
        cursor: pointer;
    }
`;



