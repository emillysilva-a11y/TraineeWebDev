import styled from 'styled-components';
import { Button } from 'antd'; 

const RESPONSIVE_BREAKPOINT_SM = "280px";

export const Container = styled.div`
    background-color: black;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

export const Header = styled.header`
    background-color: #FFE712;
    width: 100%;
    height: 100px;
    padding: 0 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .cpe-logo-img{
        max-width: 100px;
        height: auto;
    }
    
    @media (max-width: ${RESPONSIVE_BREAKPOINT_SM}) {
        height: 70px; 
        padding: 0 5px; 
        .cpe-logo-img {
            max-width: 100px;
        }
    }
`;

export const Title = styled.h1`
    font-weight: 600;
    font-size: 48px;
    color: #ffe712;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;

    @media (max-width: ${RESPONSIVE_BREAKPOINT_SM}) {
        font-size: 32px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    width: 100%;
    max-width: 400px;
    
    .login-link {
        color: white;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 30px;

        a {
            color: #ffe712; 
            text-decoration: none;
            font-weight: bold;
        }
    }

    @media (max-width: ${RESPONSIVE_BREAKPOINT_SM}) {
        padding: 10px;
        max-width: 100%;
    }
`;

export const CustomButton = styled(Button)`
    width: 100%;
    height: 50px;
    border-radius: 8px;
    font-weight: bold;
    text-transform: uppercase;
    
    background-color: #ffe712;
    color: black;
    border: none;

    &:hover {
        opacity: 0.9;
    }

    @media (max-width: ${RESPONSIVE_BREAKPOINT_SM}) {
        height: 40px;
        font-size: 16px;
    }
`;