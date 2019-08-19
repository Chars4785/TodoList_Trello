import React from 'react';
import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import {Switch,Route} from 'react-router-dom';
import {LoginPage,Login} from './loginComponents';
import {Header} from './Components';

const GlobalStyle = createGlobalStyle`
    body {
      background : white;
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
      <Route exact path="/" component={LoginPage}></Route>
      <Route exact path="/Login" component={Login}></Route>
    </>
  );
}

export default App;


/*

    
      

      <Template>
        <TodoTemplate user={Users}/>
        <AddList />
      </Template>
*/