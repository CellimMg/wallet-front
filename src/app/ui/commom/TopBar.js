import styledComponents from "styled-components";

const TopBar = styledComponents.div`

    height: 25px;
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span{
        font-size: 26px; 
        font-weight: 700; 
    }

`;

export default TopBar;