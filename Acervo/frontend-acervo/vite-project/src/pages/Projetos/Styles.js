import styled, { createGlobalStyle } from 'styled-components';
import { Input } from 'antd'

const RESPONSIVE_BREAKPOINT_SM = "280px";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    overflow-x: hidden;
    .ant-input {
      border: none !important;
  }
}
`;
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
        padding: 0 5px;
        .cpe-logo-img {
            max-width: 100px;
        }
    }
`;
export const Title = styled.h1`
    font-weight: 600;
    color: #ffe712;
    &.projects-title {
        text-align: left; 
        font-size: 38px;
        margin-top: 50px;
        margin-bottom: 20px;
        width: 100%;
        max-width: 600px;
        padding: 0 20px;
    }
    @media (max-width: ${RESPONSIVE_BREAKPOINT_SM}) {
        font-size: 28px;
        margin-top: 30px;
        padding: 0 10px;
        text-align: center;
    }
`;
export const CustomInput = styled(Input)`
    border-radius: 8px;
    height: 50px;
    margin-bottom: 20px;
    box-shadow: none;
    background-color: white;
    border: 1px solid #777;
    .ant-input {
        background-color: white;
        color: black;
        height: 50px;
        border-radius: 8px;
        padding-left: 15px;
    }
    .ant-input::placeholder {
        color: #777;
    }
    @media (max-width: ${RESPONSIVE_BREAKPOINT_SM}) {
        height: 40px;
        .ant-input {
            height: 40px;
        }
    }
`;
export const ProjetosContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-bottom: 50px;
`;
export const SearchBarContainer = styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 40px;
    .search-input-wrapper {
        position: relative;
        flex-grow: 1;
        margin-right: 15px;
    }
    .search-icon {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: #777;
        z-index: 10;
    }
    .search-input-field {
        padding-left: 40px; 
    }
    .add-button {
        background-color: #ffe712;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .add-icon {
        color: black;
        font-size: 20px;
    }
    @media (max-width: ${RESPONSIVE_BREAKPOINT_SM}) {
        padding: 0 10px;
        .add-button {
            width: 40px; 
            height: 40px;
        }
        .add-icon {
            font-size: 16px;
        }
    }
`;
export const ProjetosList = styled.div`
    width: 100%;
    max-width: 600px;
    padding: 0 20px;
    .projeto-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: transparent;
        color: white;
        padding: 15px 0;
        border-bottom: 1px solid #444;
    }
    .projeto-name {
        font-weight: bold;
        font-size: 18px;
    }
    .projeto-actions {
        display: flex;
        gap: 20px;
    }
    .action-icon {
        cursor: pointer;
        font-size: 18px;
    }
    .edit-icon {
        color: #FFE712;
    }
    .delete-icon {
        color: #ddd;
    }
    @media (max-width: ${RESPONSIVE_BREAKPOINT_SM}) {
        padding: 0 10px;
        .projeto-name {
            font-size: 14px;
        }
        .projeto-actions {
            gap: 10px;
        }
        .action-icon {
            font-size: 16px;
        }
    }
`;