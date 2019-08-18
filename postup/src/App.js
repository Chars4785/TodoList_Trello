import React from 'react';
import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import {Switch,Route} from 'react-router-dom';
import LoginPage from './loginComponents/LoginPage';

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
      <Route path="/" component={LoginPage}></Route>
    </>
  );
}

export default App;


/*

    
      <GlobalStyle />
      <Header />
      <MenuLine />

      <Template>
        <TodoTemplate user={Users}/>
        <AddList />
      </Template>
*/