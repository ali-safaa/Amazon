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
                 <img className="lg:w-[100%] lg:h-[700px]" src="https://s11284.pcdn.co/wp-content/uploads/2017/08/amazon-box.jpg.optimal.jpg" alt="hero" />
                 <img className="lg:w-[100%] lg:h-[700px]" src="https://d39w7f4ix9f5s9.cloudfront.net/dims4/default/038523e/2147483647/strip/true/crop/2500x1128+0+744/resize/1440x650!/quality/90/?url=http%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fab%2F7d%2F7387c5c34035af9dafce465fe433%2Famazon-org-smile-extruded-sq.jpg" alt="hero" />
                 <img className="lg:w-[100%] lg:h-[700px]" src="https://cdn.mos.cms.futurecdn.net/eG9dwWMNrFwoc4uW4YHS2Z.jpg" alt="hero" />
            </Carousel>
        </div>
    )
}

export default Banner
