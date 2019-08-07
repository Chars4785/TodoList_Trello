import React from 'react';
import styled from 'styled-components';
import '../Css/TodoTemplateCss.css';
import {MdSchedule} from 'react-icons/md';

/* 값을 받아와서 테이블 만들기 */

const Cards = styled.div`
    background-color: #ffffff;
    margin: 0 10px 10px;

    &:hover{
        background-color : red;
    }


`;

function List({props}){

    return (
            <div class="list">
                {props.list_name}
                {
                    props.Card.map(t=>(<Cards>{t.card_name}</Cards>))
                }
                <MdSchedule />
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