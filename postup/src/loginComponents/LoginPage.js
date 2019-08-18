import  React,{useState} from 'react';
import { Link } from 'react-router-dom';


function LoginPage(){
  const [inputs, setInput] = useState({
    id:'',
    pwd:''
  })
  const {id,pwd} = inputs;
  const onChange = e =>{
    const{name,value} = e.target;
    setInput({
      ...inputs,
      [name]:value
    });
  };
  
  return(
    <>
      <input name="id" type="text" onChange={onChange}></input><br />
      <input name="pwd" type="password" onChange={onChange}></input> <br />
      <Link to="/Login" 
      className="nav-link"><br />
          로그인
      </Link>
      <Link to="/New" className="nav-link"><br />
          회원가입
      </Link>
    </>
  );
}


export default LoginPage;