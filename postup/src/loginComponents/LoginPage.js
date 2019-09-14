import  React,{useState,useContext,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ListDispatch} from '../UserContext';
import LoginHook from '../Hooks/LoginHook';
import axios from 'axios';
import {
  LoginForm,LoginInput,Button,Loading
  ,Deny,StyledLink,HeadName,LabelName,StyledDiv
} from './Sass/LoginPageCss';
import {UserSetContext} from '../UserContext';
import Header from '../Components/Header';

//import * as api from './api'

function LoginPage(props){
  const[delay,setDelay] = useState(false);
  const[failLogin,setFailLogin] = useState(false);
  const UserSet = useContext(UserSetContext);
  const dispatch = useContext(ListDispatch);

  const [LoginUser,LoginUserSet] = useState({
    user_id:'',
    password:''
  });

  const onChange = e =>{
    const{name,value} = e.target;
    LoginUserSet({
      ...LoginUser,
      [name]:value
    })
  }
  
  async function LoginHook (user){
    try{
      const res = await axios.post('http://localhost:8080/mvcexam1/test',user);
      if(res.data.state === '0'){
        throw  new Error("데이터 잘못 왓어요.");
      }
      UserSet(res.data);
      props.history.push('/Board');
    }catch(e){
      setFailLogin(true);
      setDelay(false);
    }
  }
 
  const onSubmit = e =>{
    e.preventDefault();
    setFailLogin(false);
    setDelay(true);
    LoginHook(LoginUser)
  }

  return(
    <>
    {delay ? <Loading /> : 
      <LoginForm onSubmit={onSubmit} >
        <HeadName> Welcome to Project </HeadName>
        {failLogin &&
          <Deny><b>Invalid email or password.</b></Deny>
        }
        <LabelName>아이디</LabelName>
        <LoginInput name="user_id" type="text" placeholder="아이디" onChange={onChange}></LoginInput>
        <LabelName>비밀번호</LabelName>
        <LoginInput name="password" type="password" placeholder="비밀번호" onChange={onChange}></LoginInput>
        <Button>로그인</Button>
        <StyledLink to="/New">SING UP</StyledLink>
      </LoginForm>
    }
    <Link to="/Login">로그인 연습</Link> 
    </>
  );
}

export default LoginPage;