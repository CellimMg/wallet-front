import styledComponents from "styled-components";

const Button = styledComponents.button`
    height: ${props => (props.height == null ? "46px" : `${props.height}px`)};
    width:  ${props => (props.width == null ? "100%" : `${props.width}px`)};
    border: none;
    border-radius: 5px;
    background-color: #A328D6;
    margin: ${props => (props.margin || 0)};
    font-color: white;
    font-weight: 700;
    font-size: 20px;
    color: white;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
    }
`;


export default Button;