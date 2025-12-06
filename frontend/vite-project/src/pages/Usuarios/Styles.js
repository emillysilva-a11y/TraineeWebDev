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
export const UsersHeader = styled.div`
    width: 100%;
    max-width: 600px; 
    margin-top: 30px;
    margin-bottom: 20px; 
    text-align: center;
    
    h2 {
        color: white; 
        font-size: 24px;
        margin: 0;
        text-transform: uppercase;
    }
`;

export const UsersContent = styled.div`
    width: 100%;
    max-width: 600px; 
    padding: 0 20px;
    color: white;
`;
export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    padding: 10px 15px;
    margin-bottom: 30px;
    color: gray;
    
    .svg-inline--fa {
        margin-right: 10px;
        font-size: 18px;
    }

    input {
        flex-grow: 1;
        border: none;
        outline: none;
        background: transparent;
        font-size: 16px;
        color: black;
    }
`;

export const TableWrapper = styled.div`
    width: 100%;
    margin: 20px 0;
    color: white; 
    
    .table-header {
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr 0.3fr; 
        background-color: #FFE712;
        color: black;
        font-weight: bold;
        padding: 10px 15px;
        border-radius: 8px 8px 0 0;
        font-size: 14px;
        text-transform: uppercase;
    } 
    
    .table-row {
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr 0.3fr;
        align-items: center;
        padding: 10px 15px;
        background-color: #1A1A1A;
        border-bottom: 1px solid #333;
        font-size: 14px;
    } 
    
    .access-select-wrapper {
        position: relative;
        display: inline-block;
    }
    
    .access-select-wrapper select {
        background-color: #333; 
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 3px;
        appearance: none;
        -webkit-appearance: none;
        cursor: pointer;
        font-size: 12px;
        font-weight: bold;
        padding-right: 25px;
    }
    .access-select-wrapper:after {
        content: '▼';
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%) scale(0.6);
        color: white; 
        pointer-events: none;
    }

    .actions {
        display: flex;
        justify-content: center;
    }
    
    .delete-icon {
        color: white;
        cursor: pointer;
        font-size: 18px;
        transition: color 0.2s;
        &:hover {
            color: red;
        }
    }
`;
