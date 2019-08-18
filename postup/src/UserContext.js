import React,{useState,createContext} from 'react';

const Users ={
  id:'asd',
  pwd:''
}

export const UserInformContext = createContext();
const UserSetContext = createContext();

export  function UserContext({children}){
  const[user,setUser] = useState(Users);

  return(
    <UserInformContext.Provider value={user}>
      {children}
    </UserInformContext.Provider>
  );
}


