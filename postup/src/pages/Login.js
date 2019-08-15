import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

<<<<<<< Updated upstream
=======
// axios.post('http://localhost:8080/mvcexam1/test',
//   {
//     id:'lee2',
//     pwd:'1234'
//   })
//   .then(function (response) {
//     console.log(response);
    
//   })
//   .catch(function (error) {
//     // handle error
//     console.log("데이터 없습니다.")
//   })
//   .finally(function () {
//     // always executed
//   });

  axios.post('http://localhost:8080/mvcexam1/test', {
    id: 'Fred',
    pwd: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  

// axios.post('http://localhost:8080/mvcexam1/test', {
  //   params: {
  //     id: 'lee'
  //   }
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log("실패");
  // });

  // axios.post('http://localhost:8080/mvcexam1/test', {
  //   params: {
  //     id:'lee'
  //   }
  // });

  axios({
    method: 'post',
    url: 'http://localhost:8080/mvcexam1/test',
    data: {
      id: 'lee2',
      pwd: '1234'
    }
  });
>>>>>>> Stashed changes

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
