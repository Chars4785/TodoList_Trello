import React,{useState,createContext,useContext,useReducer,useEffect} from 'react';
import LoginHook from './Hooks/LoginHook';
import { async } from 'q';

const User ={
  user_id:'',
  password:''

}


const listtemp =[
  {
    id:'',
    name:'',
    card:[
      {
        id:'',
        name:''
      }
    ]
  }
];

function todoReducer(state,action) {
  switch (action.type) {
    case 'ADDLIST':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(
        todo => todo.id === action.id ? { ...todo, done : !todo.done } : todo
        //기존 만약 같은 같이 들어온다면 기존값을 반전해서 넣는다.
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
     default:
       throw new Error(`Unhandel action type: ${action.type}`);
  }
}


const DoardInformContext = createContext();
const TodoDispatchContext = createContext();
export const UserSetListContext = createContext();

export const UserListContext = createContext();
export const UserSetContext = createContext();
export const UserContext = createContext();

export function UserContextProvider({children}){
  const[users,setUser] = useState(User);
  const[list,setList] = useState([]);
//  const[state, dispatch] = useReducer(todoReducer,[]);

  return(
    <UserContext.Provider value={users}>
      <UserSetContext.Provider value={setUser}>
        <UserListContext.Provider value={list}>
          <UserSetListContext.Provider value={setList}>
            {children}
          </UserSetListContext.Provider>
        </UserListContext.Provider>
      </UserSetContext.Provider>
    </UserContext.Provider>
  );
}

export  function SettingUserList(listSet){  

   const result =  LoginHook('http://localhost:8080/mvcexam1/test2',{
     user_id:User.user_id
   }).then(function(res){
    listSet(res); 
    console.log(res);
   }).catch(function(error){
     console.log(error);
   })

}

export function useTodoDispatch(){
  const context = useContext(TodoDispatchContext);
  if(!context){
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useBoardInform(){
  const context = useContext(DoardInformContext);
  if(!context){
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}


