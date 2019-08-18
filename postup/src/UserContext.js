import React,{useState,useContext,createContext} from 'react';

const User ={
  id:'',
  pwd:''
}

const UserInformContext = createContext();

export function UserContext({children}){
  const[user,setUser] = useState(User);

  return(
    <UserInformContext.provide value={user}>
      {children}
    </UserInformContext.provide>
  );
}


