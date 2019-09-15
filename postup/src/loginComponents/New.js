import React,{useContext,useState} from 'react';
import {
  LoginForm,LoginPageDiv,LoginInput,Button,Loading
  ,Deny,StyledLink,HeadName,LabelName
} from './Sass/LoginPageCss';
import {ListDispatch} from '../UserContext';
import {axios} from 'axios';

function New(props){
  const dispatch = useContext(ListDispatch);
  const [User,setUserInform] = useState({
    user_id:'',
    password:'',
    email:'',
    name:''
  });

  async function postData(){
    try{
      const result = await axios.post('http://localhost:8080/mvcexam1/test4',User);
      props.history.push('/');
    }catch(e){
      props.history.push('/New');  
    }
  }

  const onSubmit = e =>{
    e.preventDefault();
    postData();
  }


  const onChange = e => {
      const {name,value} = e.target;
    setUserInform(
      {
        ...User,
        [name]:value
      })
  }

  return(
    <LoginForm method="POST" onSubmit={onSubmit} >
      <HeadName>환영한다 회원놈들아</HeadName>
      <LabelName>아이디</LabelName>
      <LoginInput name="user_id" onChange={onChange} placeholder="아이디" type="text"></LoginInput>
      <LabelName>비밀번호</LabelName>
      <LoginInput name="password" onChange={onChange}  placeholder="비밀번호" type="password"></LoginInput>
      <LabelName>이메일</LabelName>
      <LoginInput name="email" onChange={onChange}  placeholder="Email"></LoginInput>
      <LabelName>이름</LabelName>
      <LoginInput name="name" onChange={onChange}  placeholder="이름"></LoginInput>
      <Button>가입</Button>
    </LoginForm>
  );
}

export default New;
