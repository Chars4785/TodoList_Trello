import  React,{useState,useContext,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { UserSetListContext,SettingUserList} from '../UserContext';
import LoginHook from '../Hooks/LoginHook';
import {
  LoginForm,LoginInput,Button,Loading
  ,Deny,StyledLink,HeadName,LabelName
} from './Sass/LoginPageCss';
import {UserSetContext} from '../UserContext';


function LoginPage(props){
  const[delay,setDelay] = useState(false);
  const[failLogin,setFailLogin] = useState(false);
  const UserSet = useContext(UserSetContext);
  const listSet = useContext(UserSetListContext);

//  const UserListSet = useContext);

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

  /*
  const result = await LoginHook('http://192.168.30.145:8080/user/login_user',LoginUser)
     localhost:8080/mvcexam1/test
    const result = await LoginHook('http://localhost:8080/mvcexam1/test',LoginUser)
  */

  const onSubmit = async(e) =>{
    e.preventDefault();
    setFailLogin(false);
    setDelay(true);

    const result = await LoginHook('http://localhost:8080/mvcexam1/test',LoginUser)
    .then(function(response){
          console.log(response);
          setTimeout(function(){
            props.history.push('/Login');
          },2000);
          UserSet(LoginUser);
          SettingUserList(listSet);
        }).catch(function(erro){
          setFailLogin(true);
          setDelay(false);
          console.log("데이터오류")
        })
  }

  

  return(
    <>
    {delay ?  
      <Loading />
    :
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
      <StyledLink to="/New" > 회원가입 </StyledLink>
      <Link to="/Login">로그인 연습</Link> 
    </LoginForm>
    }
    </>
  );
}

export default LoginPage;