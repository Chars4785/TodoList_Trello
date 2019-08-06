import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Header from './Components/Header';
import TodoTemplate from './Components/TodoTemplate';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
      background : #e9ecef;
    }
`;

const MenuLine = styled.div`
    
    padding: 10px;
    display: flex;
    opacity: 0.5;

    align-items: center;
    justify-content: center;

`;
    

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
      </Header>
      <MenuLine />
      <TodoTemplate />
 
    
    </>
  );
}

export default App;
