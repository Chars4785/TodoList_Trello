import styled,{css} from 'styled-components';

export const CircleButton = styled.button`
    background: #38d9a9;
    &:hover{
        background: #63e6be;
    }

    z-index:5;
    cursor:pointer;
    width: 50px;
    height: 50px;

    display: flex;
    align-items:center;
    justify-content: center;

    position: relative;
    bottom:0;
    left: 50%;
    
    transform: translate(-50%,50%);

    font-size: 30px;
    color: white;
    border-radius: 40px;

    border: none;
    outline: none;

    transition: 0.125s all ease-in;
    ${props => props.open && css`
        background: #ff6b6b;
        &:hover{
            background: #ff8787;
        }
        &:active{
            background: #fa5252;
        }
        transform: translate(-50%,50%) rotate(45deg);
    `}
`


export const InsertFormPositioner = styled.div`
        position: relative;
        bottom: 0;
        
`;

export const InsertForm = styled.form`
        background: #f8f9fa;
        margin: 10px;
        border-bottom-left-radius:16px;
        border-botttm-right-radius: 16px;
        border-top:1px solid #e9ecef;
        border-radius: 3px;
        box-shadow: 0 1px 0 rgba(9,30,66,.25);
`;

export const Input = styled.input`
        padding:5px;
        border-radius: 4px;
        border: 1px solid #dee2e6;
        width: 100%;
        outline: none;
        font-size: 18px;
        box-sizing: border-box;
`;

export const AddList = styled.div`
    height:100%;
    width: 5%;

    padding:10px;
    cursor:pointer;
    background-color: #000000;
    border-radius:50px;
      
    color: white;
    margin-left: 8px;

    display:flex;
    justify-content:center;
    align-items:center;

    &:hover{
      background-color: #5e5e5e;
    }

`;