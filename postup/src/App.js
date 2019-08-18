import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Header from './Components/Header';
import TodoTemplate from './Components/TodoTemplate';
import styled from 'styled-components';
import './Components/Inform';
import { Users } from './Components/Inform';
import AddList from './Components/AddList';
import Template from './Components/Template';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './loginComponents/LoginPage';
import Login from './loginComponents/Login';
import { Route } from 'react-router-dom';
import New from './loginComponents/New';
import {UserContext} from './UserContext';

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
      <BrowserRouter>
      <UserContext>
      <Header />      
          <Route exact path="/" component={LoginPage}/>
          <Route path="/Login" component={Login}/>
          <Route path="/New" component={New}/>
        </UserContext>
      </BrowserRouter>
      
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