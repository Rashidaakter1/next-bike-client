import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
         
        <div>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://demo.templatetrend.com/prestashop/PRS373/modules/ttslideshows/views/images/sample-2.jpg"
                        alt="First slide"
                    />
                    
                    
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://demo.templatetrend.com/prestashop/PRS373/modules/ttslideshows/views/images/sample-3.jpg"
                        alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://demo.templatetrend.com/prestashop/PRS375/modules/ttslideshows/views/images/sample-1.jpg"
                        alt="Third slide"
                    />
                    
                </Carousel.Item>
                
            </Carousel>
        </div>
    );
};

export default Banner;