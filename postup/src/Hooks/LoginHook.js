import { useEffect, useState} from 'react';
import axios from 'axios';

const LoginHook = async (url,user)=>{
  try{
    return await axios.post(url,user)
  }catch(e){
    console.log(e);
  }
}

export default LoginHook;

// async function LoginHook (url,user){
  
//   const res = await axios.post(url,user)
//       .then(function (response) {
//         console.log("데이터왔어!!");
//         return response;
//       })
//       .catch(function (error) {
//         console.log(error);
//         console.log("데이터 안옴");
//       });   
  
//       return res;
// }