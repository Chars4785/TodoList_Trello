import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginPageDiv = styled.div`
    
`;

export const LoginForm = styled.form`

    width:512px;

    margin: 0 auto;
    padding:5%;

    background: #fff;
    border-radius: 6px;
    box-shadow: 0 10px 21px #e7eeef;

    display:flex;
    flex-direction: column;

`;


export const LoginInput = styled.input`
    
    background-color: #f4f9fb;
    border: 0;
    box-shadow: 0px 1px 1px 0px #e6e9ec;


    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.25;
    color: #55595c;
    background-image: none;
    background-clip: padding-box;
    
    margin: 10px 20% 30px;
    

`;
export const Button =styled.button`
    
    background: #09A59A !important;
    border: 1px solid #09A59A !important;
    font-weight: 600 !important;
    outline: none !important;
    color: #fff;

    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.25;
    
    
    background-image: none;
    background-clip: padding-box;
    
    border-radius: 20px;
    margin: 0 20% 30px;
    
    cursor:pointer;
`;

export const StyledLink = styled(Link)`
    display:flex;
    justify-content:center;
    text-decoration:none;

    background: #09A59A !important;
    border: 1px solid #09A59A !important;
    font-weight: 600 !important;
    outline: none !important;
    color: #fff;

    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.25;
    
    
    background-image: none;
    background-clip: padding-box;
    
    border-radius: 20px;
    margin: 0 20% 30px;
    cursor:pointer;
`;


export const Loading = styled.div`
    position:absolute;
    left:30%;
    top:30%;

    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 300px;
    height: 300px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
`;

export const Deny = styled.div`
    margin: 0 20% 30px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 10px;
    font-size: 13px;
    font-weight: 600;
    border-radius: 4px;
    letter-spacing: 0.1px;
    
    border: 0px;

    color: #c74a47;
    background-color: #fbe2e2;

`;


export const HeadName = styled.h1`
    text-align: center;
    
`;

export const LabelName = styled.label`
    margin: 0 20% 30px;
`;