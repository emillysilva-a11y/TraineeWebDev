import styled from 'styled-components';

const RESPONSIVE_BREAKPOINT_SM = "280px";

export const Container = styled.div`
    background-color: black;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    .header-nav {
        display: flex;
        gap: 30px; 
        margin-right: 50px; 
    }
    .nav-link {
        color: black;
        text-decoration: none;
        font-weight: bold;
        padding-bottom: 5px;
        font-size: 16px;
        text-transform: uppercase;
    }
    
    .nav-link.active {
        border-bottom: 3px solid black; 
    }

    @media (max-width: ${RESPONSIVE_BREAKPOINT_SM}) {
        height: 70px; 
        padding: 0 15px; 
        .cpe-logo-img {
            max-width: 100px;
        }
        .header-nav {
            gap: 15px;
            font-size: 12px;
            margin-right: 20px; 
        }
    }
`;

export const ProfileHeader = styled.div`
    width: 100%;
    max-width: 600px; 
    background-color: #333;
    margin-top: 0;
    margin-bottom: 30px; 
    padding: 20px 0;
    text-align: center;
    
    h2 {
        color: white; 
        font-size: 20px;
        margin: 0;
        text-transform: uppercase;
    }
`;

export const ProfileContent = styled.div`
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    padding: 0 20px;
    color: white;
    box-sizing: border-box;
`;
export const ProfileCard = styled.div`
    background-color: #1A1A1A; 
    padding: 20px;
    border-radius: 8px;
    text-align: left;
    
    .info-line {
        margin-bottom: 15px;
        font-size: 16px;
    }
    strong {
        color: #FFE712;
        display: inline-block;
        width: 100px;
        text-align: left;
        margin-right: 5px;
        font-weight: normal; 
    }
    span {
        color: white;
    }
    .edit-button {
        background-color: #FFE712;
        color: black;
        font-weight: bold;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 20px;
        text-transform: uppercase;
        transition: background-color 0.2s;
        display: block; 
        width: 100%;
        text-align: center;
        &:hover {
            background-color: #FFD700;
        }
    }
`;