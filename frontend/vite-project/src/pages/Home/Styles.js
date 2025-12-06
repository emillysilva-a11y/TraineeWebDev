import styled from 'styled-components';

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

export const CarouselWrapper = styled.div`
    width: 100%;
    max-width: 600px; 
    margin: 40px auto; 
    
    .carousel-root {
        position: relative;
    }

    .carousel {
        position: relative;
        overflow: visible;
        height: 200px; 
        max-height: 200px;
    }

    .carousel .slide {
        background: white; 
        height: 200px; 
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 10px; 
        border: 1px solid black;
    }

    .carousel .slide img {
        width: 100%; 
        max-height: 100%;
        object-fit: contain;
    }
    .carousel .control-dots {
        position: absolute;
        bottom: -20px; 
        left: 50%;
        transform: translateX(-50%);
        margin: 0;
        padding: 0;
    }
    .carousel .control-arrow {
        position: absolute;
        z-index: 20;
        opacity: 1;
        background: none;
        top: 50%;
        transform: translateY(-50%);
        padding: 0;
        width: 40px; 
        height: 40px; 
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .carousel .control-arrow::before {
        display: none;
    }
    .carousel .control-prev.control-arrow {
        left: -50px; 
    }
    .carousel .control-next.control-arrow {
        right: -50px; 
    }
    .carousel .control-prev.control-arrow:before {
        content: ''; 
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 20px 20px 20px 0;
        border-color: transparent #FFE712 transparent transparent; 
        margin-left: -5px; 
    }
    .carousel .control-next.control-arrow:before {
        content: ''; 
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 20px 0 20px 20px; 
        border-color: transparent transparent transparent #FFE712;
        margin-right: -5px; 
    }
`;
export const TableWrapper = styled.div`
    width: 100%;
    max-width: 600px; 
    margin: 40px auto; 
    color: white; 
    
    .table-header {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 0.5fr;
        background-color: #FFE712;
        color: black;
        font-weight: bold;
        padding: 10px 15px;
        border-radius: 8px 8px 0 0;
        font-size: 14px;
        text-transform: uppercase;
        margin-top: 20px;
    } 
    
    .table-row {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 0.5fr;
        align-items: center;
        padding: 10px 15px;
        background-color: #1A1A1A; /* Fundo Cinza Escuro para a linha */
        border-bottom: 1px solid #333;
        font-size: 14px;
    } 
    .member-info {
        display: flex;
        flex-direction: column;
    } 
    .member-name {
        font-weight: bold;
    }
    .time-block {
        background-color: #FFE712;
        color: black;
        padding: 5px 8px;
        border-radius: 4px;
        text-align: center;
        font-weight: bold;
        width: 80%;
    }
    .delete-icon {
        color: white; /* Cor da lixeira branca para combinar com o fundo escuro */
        cursor: pointer;
        font-size: 18px;
        text-align: center;
        transition: color 0.2s;
    }
    .delete-icon:hover {
        color: red;
    }
    
    @media (max-width: ${RESPONSIVE_BREAKPOINT_SM}) {
        max-width: 95%;
        font-size: 12px;
        .table-header, .table-row {
            grid-template-columns: 1.5fr 1fr 1fr 0.5fr;
            padding: 8px 10px;
        }
        .time-block {
            padding: 3px 5px;
            font-size: 11px;
        }
    }
`;