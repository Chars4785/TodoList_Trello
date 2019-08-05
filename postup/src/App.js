import React from 'react';
import InputStream from './InputStream';
import {createGlobalStyle} from 'styled-components';
import Header from './Components/Header'

const GlobalStyle = createGlobalStyle`
    body {
      background : #e9ecef;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
      </Header>
    </>
  );
}

export default App;
