import React from 'react';
import styled,{css} from 'styled-components';
import '../Css/TodoTemplateCss.css';
import {MdAdd} from 'react-icons/md';

/* 값을 받아와서 테이블 만들기 */

const Cards = styled.div`
    background-color: #ffffff;
    margin: 0 10px 10px;

    &:hover{
        background-color : red;
    }

`;

const spanList = styled.span`
    ${props => props.mainName !== 'true'
     && css`
        color:white;
     `}
`;


function List({props}){
    return (
            <div class="list">
                <spanList mainName="true">{props.list_name}</spanList>
                <spanList>
                    {
                        props.Card.map(t=>(<Cards>{t.card_name}</Cards>))
                    }
                </spanList>                
                <MdAdd /><spanList>add other card</spanList>
            </div>           
    );
}


function TodoTemplate({user}){
    return(
        <>
            {
                user.map(
                    props =>(<List props={props}></List>)
                )
            }
        </>
    );
}


export default TodoTemplate;