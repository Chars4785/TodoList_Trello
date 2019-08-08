import React from 'react';
import styled from 'styled-components';

const From = styled.div`
    display: flex;
`;


function Template({children}){
    return(
        <From>
            {children}
        </From>
    );
}

export default Template;