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

    transition: 0.125s all ease-in;
    ${props => props.add && css`
        visibility:hidden;
    `}

`;

export const BackGround = styled.div`
    /* position: absolute;
    z-index:6;
    margin:0;
    padding:0;

    height:100%; */
    align-items: flex-start;
    background-color: rgba(0,0,0,.64);
    
    height: 100%;
    justify-content: center;
    left: 0;
    overflow-y: auto;
    position: fixed;
    top: 0;
    width: 100%;
    height:100%;
    z-index: 10;
`;

export const AddListInput = styled.input`
    width: 20%;
    background-color: #dfe1e6;
    border-radius:16px;
    box-shadow: 0 0 8px rgba(0,0,0,0.04);
    margin-left: 8px;
`;


export const Board = styled.div`
    position: relative;
    flex-grow: 1;
    display: flex;
    justify-content: row;
`;

export const CardList = styled.div`
    height:100%;
    width: 20%;
    background-color: #dfe1e6;
    border-radius:16px;
    box-shadow: 0 0 8px rgba(0,0,0,0.04);
    margin-left: 8px;
    
    .list_board{
        padding: 10px;
        border-bottom: 1px solid #20c997;
        display: flex;
        justify-content: center;
        margin: 10px;   
        font-size:20px;
        color: #000000;
    }

    .card_list{

      margin: 10px; 
      padding: 6px 8px 2px;
      font-size: 20px;
      background-color: #fff;
      border-radius: 3px;
      box-shadow: 0 1px 0 rgba(9,30,66,.25);
      cursor: pointer;
      &:hover{
        background-color: rgb(233, 229, 229);
        
      }
    }

    .add{
        color: #20c997;
        font-size:18px;
        margin-top:40px;
        font-weight:bold;
        border: #5e5e5e
    }

`;
