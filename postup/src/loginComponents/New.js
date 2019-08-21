import React from 'react';
import {
  LoginForm,LoginPageDiv,LoginInput,Button,Loading
  ,Deny,StyledLink,HeadName,LabelName
} from './Sass/LoginPageCss';


function New(){
  return(
    <LoginForm>
      <LabelName>아이디</LabelName>
      <LoginInput id="id" placeholder="아이디" type="text"></LoginInput>
      <LabelName>비밀번호</LabelName>
      <LoginInput id="pwd" placeholder="비밀번호" type="password"></LoginInput>
      <LabelName>이메일</LabelName>
      <LoginInput id="email" placeholder="Email"></LoginInput>
      <Button>가입</Button>
    </LoginForm>
  );
}

export default New;
