import React,{useState,useContext} from 'react';
import { MdAdd } from 'react-icons/md';
import Detail from '../Components/Detail';
import {UserListContext} from '../UserContext';
import {
  CircleButton,InsertFormPositioner,InsertForm,Input, AddList
  ,BackGround,AddListInput,Board,CardList,StyleMdADD,
} from './Sass/LoginCss';
import ListForm from './ListForm';

function Login(){
  const[add,setAdd] = useState(false);
  const list = useContext(UserListContext);
  
  const makeList = () =>{
    setAdd(!add);
  }

  return(
    <>
      <Board>
        {list.map(t =>(<ListForm props={t}></ListForm>))}
        <AddList onClick={makeList} add={add}>
        {
          add &&
          <AddListInput type="text" autoFocus placeholder="이름을 적어주세요"/>            
          
        }
        </AddList>
      </Board>
    
    </>
  );
}


export default Login;

