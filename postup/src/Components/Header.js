import React from 'react';
import styled from 'styled-components';
import {TiHomeOutline} from 'react-icons/ti'

const HeaderBar = styled.div`
    background: rgba(0,0,0,.35);   
    padding: 10px;
    display: flex;

    align-items: center;
    justify-content: center;

`;

const HeaderBar_Home = styled.button`
    
    &:hover{
        background: #eaebdf;
    }

    /*버튼 스타일*/
    cursor:pointer;
    color: white;
    margin-right: 16px;
    font-size: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    display:flex;

    justify-content: center;
    align-items:center;

`;

const HeaderBar_UserB = styled.button`

    &:hover{
        background: #ff0000;
    }

    /*버튼 스타일*/
    cursor:pointer;
    color: white;
    margin-right: 16px;
    font-size: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    display:flex;

    justify-content: center;
    align-items:center;
    
`;

const HeaderBar_item = styled.div`
    margin-right: 16px;
    align-self: stretch;
    display: flex;

    flex: auto;
    box-sizing: border-box;
`;

function Header(){
    return(
        <HeaderBar>
            <HeaderBar_Home>
             <TiHomeOutline />
            </HeaderBar_Home>
            <HeaderBar_item />
            <HeaderBar_UserB>J</HeaderBar_UserB>
        </HeaderBar>
    );
}

export default Header;