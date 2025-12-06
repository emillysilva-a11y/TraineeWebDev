import styled from 'styled-components'

const RESPONSIVE_BREAKPOINT= "280px";

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

    @media (max-width: ${RESPONSIVE_BREAKPOINT}) {
        padding: 0 10px;
        height: 80px;

        .cpe-logo-img{
            max-width: 120px;
        }
    }
`;

export const Title = styled.h1`
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 48px;
    color: #ffe712;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;

    @media (max-width: ${RESPONSIVE_BREAKPOINT}) {
        font-size: 36px; 
        margin-top: 20px;
        margin-bottom: 20px;
    }
`
export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    width: 100%;
    max-width: 400px;

    .criar-conta-btn-margin {
        margin-top: 30px; 
        width: 100%;
    }

    .login-link {
        color: white;
        text-align: center;
        margin-top: 15px;

        a {
            color: #ffe712; 
            text-decoration: none;
            font-weight: bold;
        }
    }

    @media (max-width: ${RESPONSIVE_BREAKPOINT}) {
        padding: 20px 10px;
        max-width: 95%; 
        
        .login-link {
            font-size: 14px; 
        }
    }
`;