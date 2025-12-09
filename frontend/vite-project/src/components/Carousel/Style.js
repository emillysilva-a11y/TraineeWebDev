import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

export const CarouselWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
    overflow: visible;
    position: relative;
    
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
        height: 200px; 
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 0px; 
        border: none;
    }

    .carousel-slide img {
        width: 450px;       
        height: 200px;
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
        left: 0px; 
    }
    .carousel .control-next.control-arrow {
        right: 0px; 
    }
    .carousel .control-prev.control-arrow:before {
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 20px 20px 20px 0;
        border-color: transparent #FFE712 transparent transparent; 
        margin-left: -5px; 
    }
    .carousel .control-next.control-arrow:before {
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 20px 0 20px 20px; 
        border-color: transparent transparent transparent #FFE712;
        margin-right: -5px; 
    }
`;