import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselWrapper } from './Style';
import Slide1 from '../../assets/Slide1.png';
import Slide2 from '../../assets/Slide2.png';
import Slide3 from '../../assets/Slide3.png';

const Caurosel = () => {
    return(
        <CarouselWrapper>
                        <Carousel 
                            showArrows={true}
                            showThumbs={false}
                            showStatus={false}
                            infiniteLoop={true}
                        >
                            <div className="carousel-slide">
                                <img src={ Slide1 } alt='' />
                            </div>
                            <div className="carousel-slide">
                                <img src={ Slide2 } alt=''/>
                            </div>
                            <div className="carousel-slide">
                                <img src={ Slide3 } alt=''/>
                            </div>
                        </Carousel>
                    </CarouselWrapper>
    )
};

export default Caurosel;