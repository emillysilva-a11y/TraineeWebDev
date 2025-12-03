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
        gap: 20px;
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
        padding: 0 5px; 
        .cpe-logo-img {
            max-width: 100px;
        }
        .header-nav {
            gap: 10px;
            font-size: 12px;
        }
    }
`;

export const CarouselWrapper = styled.div`
    width: 100%;
    max-width: 600px; 
    margin: 40px auto;

    .carousel .slide .legend {
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px;
        font-size: 14px;
    }

    .carousel .control-arrow {
        opacity: 1;
        background: none;
    }

    .carousel .control-arrow::before {
        border-color: rgba(255, 231, 18, 1);
        border-width: 0 10px 10px 0;
    }

    .carousel .control-prev.control-arrow::before {
        border-color: transparent rgba(255, 231, 18, 1) transparent transparent; 
    }

    .carousel .control-next.control-arrow::before {
        border-color: transparent transparent transparent rgba(255, 231, 18, 1);
    }
    .carousel .control-arrow {
        top: 50%;
        transform: translateY(-50%);
        padding: 20px;
    }
`;

export const TableWrapper = styled.div`
    width: 100%;
    max-width: 600px; 
    margin: 20px auto;
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
        color: gray;
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