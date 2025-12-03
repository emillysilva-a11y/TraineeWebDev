import styled from 'styled-components';
import { Input, Button } from 'antd';

const RESPONSIVE_BREAKPOINT_SM = "280px";

export const Container = styled.div`
    background-color: black;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: 100vw;
    margin: 0;
`;

export const Header = styled.header`
    background-color: #FFE712;
    width: 100%;
    height: 100px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .cpe-logo-img{
        max-width: 150px;
        height: auto;
    }
    @media (max-width: ${RESPONSIVE_BREAKPOINT_SM}) {
        height: 70px;
    }
`;

export const Title = styled.h1`
    font-weight: 600;
    color: #ffe712;
    text-align: center; 

    &.edit-title {
        color: white;
        font-size: 38px;
        margin-top: 50px;
        margin-bottom: 30px;
    }
    @media (max-width: ${RESPONSIVE_BREAKPOINT_SM}) {
        &.edit-title {
            font-size: 30px;
        }
    }
`;
export const CustomInput = styled(Input)`
    border-radius: 8px !important;
    height: 50px !important;
    margin-bottom: 20px !important;
    box-shadow: none !important;
    
    background-color: white !important;
    border: 1px solid #777 !important;

    .ant-input {
        background-color: white !important;
        color: black !important;
        height: 50px !important;
        border-radius: 8px !important;
        padding-left: 15px !important;
    }
`;
export const CustomButton = styled(Button)`
    width: 100%;
    height: 50px;
    border-radius: 8px;
    font-weight: bold;
    text-transform: uppercase;
`;
export const FormWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 40px;
    background-color: #333;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    .input-group {
        width: 100%;
        margin-bottom: 20px;
    }
    .input-label {
        color: white;
        font-weight: bold;
        display: block;
        margin-bottom: 8px;
        text-align: left;
    }
    .button-group {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        margin-top: 40px;
        width: 100%;
    }
    .cancel-button {
        background-color: transparent !important;
        color: #FFE712 !important;
        border: 1px solid #FFE712 !important;
        width: 50%;
    }
    .save-button {
        background-color: #FFE712 !important;
        color: black !important;
        width: 50%;
    }
    @media (max-width: ${RESPONSIVE_BREAKPOINT_SM}) {
        padding: 20px 15px;
        .button-group {
            gap: 10px;
        }
    }
`;
