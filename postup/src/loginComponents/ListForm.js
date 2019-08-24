
import React,{useState,useContext} from 'react';
import {
  CircleButton,InsertFormPositioner,InsertForm,Input, AddList
  ,BackGround,AddListInput,Board,CardList,StyleMdADD,
} from './Sass/LoginCss';
import { MdAdd } from 'react-icons/md';
import Detail from '../Components/Detail';
import {ListDispatch} from '../UserContext';

function ListForm({props}){
  const[open,setOpen] = useState(false);
  const[detail,setDetail] = useState(false);
  const[name,setName] = useState({});
  const[value,setValue] = useState('');
  

  const onChange = e => setValue(e.target.value);
  const dispatch = useContext(ListDispatch);

  const onToggle = () => setOpen(!open);
  
  function onClick(pro){ 
    setName(pro);
    setDetail(!detail);
  };

  // name:
  // description
  // list_id

  const onSubmit = (id)=>{
    dispatch({
      type:'ADDCARD',
      todo:{
        card_name:value,
        card_description:'no',
        list_id:id
      }
    });
    setOpen(!open);
    setValue('');
  }

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
                      props.cardlist.map(t=>(
                        <div className ="card_list" onClick={()=>onClick(t)} >
                          {t.card_name}
                        </div>
                      ))
                  }
              {open && (
                  <InsertFormPositioner>
                      <InsertForm onSubmit={e=>{e.preventDefault();
                            onSubmit(props.list_id);}}>
                          <Input placeholder="할 일을 입력 후,Enter"
                          autoFocus
                          value={value}
                          onChange={onChange}
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

export default ListForm;