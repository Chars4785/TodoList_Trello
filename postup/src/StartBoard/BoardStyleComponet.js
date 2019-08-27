import styled from 'styled-components';
import {MdFolder,MdList} from 'react-icons/md'
import {Link} from 'react-router-dom';

export const BoardDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    
`;

export const BoardMenuDiv = styled.div`
    width:20%;
    height:500px;
    margin-top: 40px; 
    display:flex;
    justify-content:row;
    font-size:20px;
    border-right:1px solid black;

`;

export const BoardRight = styled.div`
  margin-top: 40px;
  width: 60%;
  display:flex;
  justify-content:row;
`;

export const MdFolderStyled = styled(MdFolder)`


`;

export const NewBoard =styled(Link)`
    margin-right:10px;
      background-color:black;
    box-shadow: none;
    border: none;
    color: white;
    display: table-cell;
    height: 80px;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    width:20%;
    transition-property: background-color,border-color,box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;
    
`;

export const CreateBoard = styled.div`
  background-color: rgba(9,30,66,.04);
    box-shadow: none;
    border: none;
    color: #172b4d;
    display: table-cell;
    height: 80px;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    width:20%;
    transition-property: background-color,border-color,box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;
    cursor:pointer;

    &:hover{
      background-color: #97a0af;
    }

`;

export const MdListStyled = styled(MdList)`
    margin-right:20px;

`;