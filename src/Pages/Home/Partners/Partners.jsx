import React from 'react'
import './Partners.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from '../../../assets/p1.png'
import p2 from '../../../assets/p2.png'
import p3 from '../../../assets/p3.png'
import p4 from '../../../assets/p4.png'
import p5 from '../../../assets/p5.png'
import p6 from '../../../assets/p6.png'

const Partners = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };


    return (
        <div className="max-wrapper partners">
            <div className="max-wrapper-content">
                <div className="heading-sm partners-title">PARTNERS</div>
                <Slider {...settings} className="partners-slider">
                    <div>
                        <div className="partners-slider-img">
                            <img src={p1} alt="partners logo" />
                        </div>
                    </div>
                    <div>
                        <div className="partners-slider-img">
                            <img src={p2} alt="partners logo" />
                        </div>
                    </div>
                    <div>
                        <div className="partners-slider-img">
                            <img src={p3} alt="partners logo" />
                        </div>
                    </div>
                    <div>
                        <div className="partners-slider-img">
                            <img src={p4} alt="partners logo" />
                        </div>
                    </div>
                    <div>
                        <div className="partners-slider-img">
                            <img src={p5} alt="partners logo" />
                        </div>
                    </div>
                    <div>
                        <div className="partners-slider-img">
                            <img src={p6} alt="partners logo" />
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    )
}

export default Partners