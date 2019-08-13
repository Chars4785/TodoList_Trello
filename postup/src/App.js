import React, { Component } from 'react';
import {createGlobalStyle} from 'styled-components';
import Header from './Components/Header';
import TodoTemplate from './Components/TodoTemplate';
import styled from 'styled-components';
import './Components/Inform';
import { Users } from './Components/Inform';
import AddList from './Components/AddList';
import Template from './Components/Template';
import { Route } from 'react-router-dom';
import { Login, About } from './pages';
import axios from 'axios';


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

// axios.get('http://192.168.30.145:8080/user/findall')
//   .then(function (response) {
//     console.log(
//       response.request

//     );
    
//   })
//   .catch(function (error) {
//     // handle error
//     console.log("데이터안왔어");
//   })
//   .finally(function () {
//     // always executed
//   });



class App extends Component {
    render() {
        return (
          <>
          <Header />
                <Route exact path="/" component={Login}/>
                <Route path="/about" component={About}/>
          </>
        );
    }
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


          <>
         
          </>



*/