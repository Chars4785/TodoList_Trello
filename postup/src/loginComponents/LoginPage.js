import  React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import {UserInformContext} from '../UserContext';
import LoginHook from '../Hooks/LoginHook';

function LoginPage(){
  const [user,userSet] = useState({
    id:'',
    pwd:''
  });
  const context = useContext(UserInformContext);
  
  console.log(result);
  const onSubmit =() =>{
    const result = LoginHook(
      'http://localhost:8080/mvcexam1/test'
    );
    
  }
  
  const onChange = e =>{
    const {name,value} = e.target;
    userSet({
      ...user,
      [name]:value
    })
  }

  return(
    <>
      <input name="id" type="text" onChange={onChange}></input><br />
      <input name="pwd" type="password" onChange={onChange}></input> <br />
      <Link to="/New" onClick={onSubmit} className="nav-link"><br />
          로그인
      </Link>
      <Link to="/New" className="nav-link"><br />
          회원가입
      </Link>
    </>
  );
}


export default LoginPage;