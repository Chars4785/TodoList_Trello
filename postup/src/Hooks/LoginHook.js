import { useEffect, useState} from 'react';
import axios from 'axios';

function LoginHook(url){
  //console.log(userprops);
 
  const [response,resSet] = useState(null);

  useEffect(
    async () => {
      try {
        const res = await axios.post(url); // 실제 요청
        resSet(res);
      } catch (e) {
        console.log(e);
      }
    },
    url // url 이 바뀔때만 실행됨
  );
  return response;
}

export default LoginHook;
// const LoginHook= (url,{userprops}) =>{
  // const [loading, setLoading] = useState(false);
  // const [response, setResponse] = useState(null);
  // const [error, setError] = useState(null);

  // 렌더링 될 때, 그리고 url 이 바뀔때만 실행됨
  // useEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
  //   async () => {
  //     setError(null); // 에러 null 처리
  //     try {
  //       setLoading(true); // 로딩중
  //       const res = await axios.post(url,{
  //         userprops
  //       }); // 실제 요청
  //       setResponse(res); // response 설정
  //     } catch (e) {
  //       setError(e); // error 설정
  //     }
  //     setLoading(false); // 로딩 끝
  //   },
  //   [url] // url 이 바뀔때만 실행됨
  // );
//   return [response, loading, error]; // 현재 값들을 배열로 반환
// }

//export default LoginHook;