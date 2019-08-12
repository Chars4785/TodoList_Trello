import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


function Login(){
    return(
        <>
            <input type="text"></input><br />
            <input type="password"></input> <br />
            <Link to="/" className="nav-link"><br />
                로그인
            </Link>
            <Link to="/About" className="nav-link"><br />
                회원가입
            </Link>
        </>
    );

}


export default Login;
