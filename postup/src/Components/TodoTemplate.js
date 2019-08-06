import React from 'react';
import styled from 'styled-components';
/* 값을 받아와서 테이블 만들기 */

const Template = styled.div`
    background: white;
    border-radius:16px;
    box-shadow: 0 0 8px rgba(0,0,0,0.04);
    opacity: 0.5;

    width: 272px;
    margin: 0 4px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
`;

function TodoTemplate(){
    return(
        <>
        <Template>here</Template>
        </>
    );

}


export default TodoTemplate;