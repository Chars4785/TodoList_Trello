import React,{useState,createContext,useContext,useReducer,useEffect} from 'react';
import LoginHook from './Hooks/LoginHook';
import { async } from 'q';

const User ={
  user_id:'',
  password:''

}


const listtemp =[
  {
    id:'listId',
    name:'listName',
    card:[
      {
        id:'cardId',
        name:'cardName'
      }
    ]
  }
];

function todoReducer(state,action) {
  switch (action.type) {
    case 'FIRST':{
      return state.concat(action.todo);
    }
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
       throw "ee";
       //throw new Error(`Unhandel action type`);
    }
  }


const DoardInformContext = createContext();
export const ListDispatch = createContext();


export const UserSetListContext = createContext();

export const UserListContext = createContext();
export const UserSetContext = createContext();
export const UserContext = createContext();

export function UserContextProvider({children}){
  const[users,setUser] = useState(User);
  //const[list,setList] = useState(listtemp);
  const[state,dispatch] = useReducer(todoReducer,[]);

  return(
    <UserContext.Provider value={users}>
      <UserSetContext.Provider value={setUser}>
        <UserListContext.Provider value={state}>
          
            <ListDispatch.Provider value={dispatch}>
              {children}
            </ListDispatch.Provider>
          
          </UserListContext.Provider>
      </UserSetContext.Provider>
    </UserContext.Provider>
  );
}

export function useTodoDispatch(){
  const context = useContext(ListDispatch);
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


