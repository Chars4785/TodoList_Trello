import React from 'react';
import styled from 'styled-components';
import {MdAdd} from 'react-icons/md'


const Add = styled.div`

    background-color : #badbff;
    display:flex;
`;

function AddList(){
    return(
        <>
            <Add>
                <MdAdd />Add another list
            </Add>
        </>
    );
}

export default AddList;