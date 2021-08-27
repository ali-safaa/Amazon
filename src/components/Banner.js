import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner(props) {
    return (
        <div>
            <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
            >
                 <img className="lg:w-[100%] lg:h-[700px]" src={props.image} alt="hero" />
                 <img className="lg:w-[100%] lg:h-[700px]" src={props.image} alt="hero" />
                 <img className="lg:w-[100%] lg:h-[700px]" src={props.image} alt="hero" />
            </Carousel>
        </div>
    )
}

export default Banner
