import  React,{useState,useContext,useRef} from 'react';
import { Link } from 'react-router-dom';
import {UserInformContext} from '../UserContext';
import LoginHook from '../Hooks/LoginHook';
import axios from 'axios';

function LoginPage(){
  const [user,userSet] = useState({
    id:'',
    pwd:''
  });
  const [result,resultSet] = useState({
    result:''
  });
  const context = useContext(UserInformContext);
  const onChange = e =>{
    const{name,value} = e.target;
    userSet({
      ...user,
      [name]:value
    })
  }

  const onSubmit = e =>{
    e.preventDefault();
    LoginHook('http://localhost:8080/mvcexam1/test',user,resultSet);
  }
  
  return(
    <>
    <form onSubmit={onSubmit}>
      <input name="id" type="text" onChange={onChange}></input><br />
      <input name="pwd" type="password" onChange={onChange}></input> <br />
      <button>로그인</button>
    </form>
    <button onClick={()=>console.log(result)}>sadasd</button>
      <Link to ="/Login">로그인 연습</Link> <br></br>
      <Link to="/New" className="nav-link"><br />
          회원가입
      </Link>
      
    </>
  );
}


export default LoginPage;