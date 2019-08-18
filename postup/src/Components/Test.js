import React, {createContext, useContext} from 'react';

const Mycontext = createContext('default');

function Child(){
  const text = useContext(Mycontext);
  return <div>{text}</div>
}

function Parent(){
  return <Child />
}

function GrandParent(){
  return <Parent />
}

function ContextSample(){
  return(
    <Mycontext.Provider value="GOOD">
      <GrandParent />
    </Mycontext.Provider>
  );
}