import React,{useState,createContext,useContext,useReducer} from 'react';

const Users ={
  user_id:'asd',
  password:''
}

const Board =[ 
  {
      list_name: "Todo 할거",
      list_id: 1,
      Card :[
          {
              cards_id: 1,
              card_name :'first_do'
          },
          {
              cards_id: 2,
              card_name :'seconde_do'
          },
          {
              cards_id: 3,
              card_name :'third_do'
          },
          {
              cards_id: 4,
              card_name :'four_do'
          }
      ]
  },
  {
      list_id: 2,
      list_name: 'Site',
      Card :[
          {
              cards_id: 1,
              card_name : 'here@naver.com'
          },
          {
              cards_id: 2,
              card_name : 'thisis@naver.com'
          }
      ]
  },
  {
      list_id: 3,
      list_name: 'Empty',
      Card :[]
  },
  {
      list_id: 4,
      list_name: 'Hi',
      Card :[]
  },
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


const UserInformContext = createContext();
const DoardInformContext = createContext();
const TodoDispatchContext = createContext();

export const UserSetContext = createContext();


export  function UserContext({children}){
  const[user,setUser] = useState(Users);
  
  const[list, dispatch] = useReducer(todoReducer,Board);

  return(
    <UserInformContext.Provider value={user}>
      <UserSetContext.Provider value={setUser}>
      <DoardInformContext.Provider value={list}>
        <TodoDispatchContext.Provider value={dispatch}>
          {children}
        </TodoDispatchContext.Provider>
      </DoardInformContext.Provider>
      </UserSetContext.Provider>
    </UserInformContext.Provider>
  );
}

export function useUserInform(){
  const context = useContext(UserInformContext);
  if(!context){
    throw new Error('Cannot find TodoProvider');
  }
  return context;
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


