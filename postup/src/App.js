import React from 'react';
import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import {Switch,Route} from 'react-router-dom';
import {LoginPage,Login,New} from './loginComponents';
import Header from './Components/Header';

const GlobalStyle = createGlobalStyle`
    body {
      background: #f5f6f7;
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
    <Switch>
      <Route exact path="/" component={LoginPage}></Route>
      <Route exact path="/Login" component={Login}></Route>
      <Route exact path="/New" component={New}></Route>
    </Switch>
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