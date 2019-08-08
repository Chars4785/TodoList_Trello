import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Header from './Components/Header';
import TodoTemplate from './Components/TodoTemplate';
import styled from 'styled-components';
import './Components/Inform';
import { Users } from './Components/Inform';
import AddList from './Components/AddList';
import Template from './Components/Template';

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
      <Header />
      <MenuLine />

      <Template>
        <TodoTemplate user={Users}/>
        <AddList />
      </Template>
    </>
  );
}

export default App;
