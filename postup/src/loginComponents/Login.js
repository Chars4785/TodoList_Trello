import React,{useState,useContext,useEffect} from 'react';
import LoginHook from '../Hooks/LoginHook';
import Users from '../Components/Inform';
import styled,{css} from 'styled-components';
import { MdAdd } from 'react-icons/md';
import Detail from '../Components/Detail';
import {useList,UserListContext,UserContext,SetList,UserSetListContext} from '../UserContext';
import {
  CircleButton,InsertFormPositioner,InsertForm,Input, AddList
  ,BackGround,AddListInput,Board,CardList,StyleMdADD,
} from './Sass/LoginCss';
import {Loading} from './Sass/LoginPageCss';
import { async } from 'q';
import { SettingUserList} from '../UserContext';

function List({props}){
  const[open,setOpen] = useState(false);
  const[detail,setDetail] = useState(false);
  const[name,setName] = useState('');
  const onToggle = () => setOpen(!open);
  
  function onClick(pro){ 
    setName(pro);
    setDetail(!detail);
  };

  return (
    <>    {detail &&
            <>
            <BackGround onClick={onClick} />
            <Detail props={name} />  
            </>       
          }
          <CardList>
                <div className="list_board"><b>{props.name}</b></div>
                  {
                      props.card.map(t=>(
                        <div className ="card_list" onClick={()=>onClick(props)} >
                          {t.name}
                        </div>
                      ))
                  }
              {open && (
                  <InsertFormPositioner>
                      <InsertForm onSubmit={e=>e.preventDefault()}>
                          <Input placeholder="할 일을 입력 후,Enter"
                          autoFocus
                           />
                      </InsertForm>
                  </InsertFormPositioner>
                  )}    
              <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
              </CircleButton> 
            </CardList>
      </>
  );
}

function Login(){
  const[add,setAdd] = useState(false);
  const list = useContext(UserListContext);
  
  const makeList = () =>{
    setAdd(!add);
  }

  

  return(
    <>
      <Board>
        {list.map(props =>(<List props={props}></List>))}
        <AddList onClick={makeList} add={add}>
        {
          add ?
          <AddListInput type="text" autoFocus placeholder="이름을 적어주세요"/>            
          :<StyleMdADD />
        }
        </AddList>
      </Board>
    
    </>
  );
}


export default Login;

