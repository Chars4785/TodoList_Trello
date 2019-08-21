import React,{useState} from 'react';
import LoginHook from '../Hooks/LoginHook';
import Users from '../Components/Inform';
import styled,{css} from 'styled-components';
import { MdAdd } from 'react-icons/md';
import Detail from '../Components/Detail';
import {useBoardInform} from '../UserContext';
import {
  CircleButton,InsertFormPositioner,InsertForm,Input, AddList
  ,BackGround,AddListInput,Board,CardList
} from './Sass/LoginCss';

function List({props}){
  const[open,setOpen] = useState(false);
  const[detail,setDetail] = useState(false);
  const[name,setName] = useState('');
  const onToggle = () => setOpen(!open);
  
  function onClick(props){ 
    setName(props);
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
                <div className="list_board"><b>{props.list_name}</b></div>
                  {
                      props.Card.map(t=>(
                        <div className ="card_list" onClick={()=>onClick(t.card_name)} >
                          {t.card_name}
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
  const list = useBoardInform();
  const makeList = () =>{
    setAdd(!add);
  }
  return(
    <>
      <Board className="Board">
        {list.map(props =>(<List props={props}></List>))}
        
        
        {
          add &&
          <>
            <AddListInput type="text" placeholder="이름을 적어주세요"/>            
            <MdAdd />
          </>
        }
        <AddList onClick={makeList} add={add}>
          <MdAdd />
        </AddList>
      </Board>
    </>
  );
}


export default Login;

