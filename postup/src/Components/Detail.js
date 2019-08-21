import React from 'react';
import styled from 'styled-components';
import {DetailInform,DetailDiv} from  '../Components/css/DetailCss';

function Detail({props}){
  return(
    <DetailInform>
      <h1><b>{props}</b></h1>
    </DetailInform>
  );
}

export default Detail;


