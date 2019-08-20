import  React,{useState,useContext,useRef} from 'react';
import { Link } from 'react-router-dom';
import {UserInformContext} from '../UserContext';
import LoginHook from '../Hooks/LoginHook';
import axios from 'axios';
import {LoginForm,LoginPageDiv,LoginInput,Button} from './Sass/LoginPageCss';

function LoginPage(){
  const [user,userSet] = useState({
    user_id:'',
    password:''
  });
  
  const context = useContext(UserInformContext);
  const onChange = e =>{
    const{name,value} = e.target;
    userSet({
      ...user,
      [name]:value
    })
  }

  const onSubmit = async(e) =>{
    e.preventDefault();
     const result = await LoginHook('http://192.168.30.145:8080/user/login_user',user)
      .then(function(response){
          console.log(response);
      }).catch(function(erro){
          console.log("데이터오류")
      })
  }
  


  return(
    <>
    <LoginForm onSubmit={onSubmit}>
      <LoginInput name="user_id" type="text" placeholder="아이디" onChange={onChange}></LoginInput>
      <LoginInput name="password" type="password" placeholder="비밀번호" onChange={onChange}></LoginInput>
      <Button>로그인</Button>
      <Link to ="/Login">로그인 연습</Link> 
      <Link to="/New" className="nav-link">
          회원가입
      </Link>
    </LoginForm>
    
    </>
  );
}

export default LoginPage;