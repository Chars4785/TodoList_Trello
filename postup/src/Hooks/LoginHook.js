import { useEffect, useState} from 'react';
import axios from 'axios';

// const LoginHook = async (url,user)=>{
//   try{
//     return await axios.post(url,user);    
//   }catch(e){
//     console.log(e);
//   }
  
// }
async function LoginHook (url,user){
  
  const res = await axios.post(url,user)
      .then(function (response) {
        console.log("데이터왔어!!");

      if(response.data.state === '0'){
        throw "Fail";
      }
        return response;
      });   
  
      return res;
}

export default LoginHook;

