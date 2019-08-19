import React,{useState} from 'react';
import LoginHook from '../Hooks/LoginHook';
import './Sass/LoginScss.scss';
import Users from '../Components/Inform';
import styled,{css} from 'styled-components';
import {MdAdd} from 'react-icons/md';
import {CircleButton,InsertFormPositioner,InsertForm,Input, AddList} from './Sass/LoginCss';

function List({props}){
  const[open,setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  return (
    <>
          <div className="List">
                <div className="list_board"><b>{props.list_name}</b></div>
                  {
                      props.Card.map(t=>(<div className ="card_list">{t.card_name}</div>))
                  }
              {open && (
                  <InsertFormPositioner>
                      <InsertForm>
                          <Input placeholder="할 일을 입력 후,Enter"
                          autoFocus
                           />
                      </InsertForm>
                  </InsertFormPositioner>
                  )}    
              <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
              </CircleButton> 
          </div>   
      </>
  );
}

function Login(){
  return(
    <>
      <div className="Board">
        {Users.map(props =>(<List props={props}></List>))}
        <AddList>
          <MdAdd />
        </AddList>
      </div>
    </>
  );
}


export default Login;

