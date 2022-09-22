import React, { useEffect } from 'react'
import './Fashion.css'
import {ReactComponent as Img} from '../../Images/Div1.svg'

const Fashion = () => {

    useEffect(() => {
        const popup = document.querySelector('.popup-container')

        const popupBtn = document.querySelectorAll(".btn-popup");
        const btnFunc = () => {
            popup.classList.add("show")
        }
        popupBtn.forEach(n => n.addEventListener('click', btnFunc))

    }, [])


    return (
        <div className="fashion-wrapper">
            <div className="fashion no-highlight">
                <div className="fashion_content_wrapper">
                    <div className="fashion_content">
                        <div className="fashion_content_header">
                            <h1>Buy from the best of fashion designers, even your favorite fashion designer is on Kartlog</h1>
                        </div>
                        <div className="fashion_content_list">
                            <div className="fashion_content_items">
                                <div className="check"><span className="material-icons">check_circle</span></div>
                                <div className="item">Kartlog connects you to the best fashion designers in your neighbourhood, you can now make orders for perfect fitted wears with your measurements</div>
                            </div>
                            <div className="fashion_content_items">
                                <div className="check"><span className="material-icons">check_circle</span></div>
                                <div className="item">Kartlog has thousands of design styles to suit your every event, traditional, casual and corporates posted by verified fashion designers</div>
                            </div>
                            <div className="fashion_content_items">
                                <div className="check"><span className="material-icons">check_circle</span></div>
                                <div className="item">Kartlog offers affordable material pickup and delivery across Africa</div>
                            </div>
                            <div className="btn btn-popup">Get Started</div>
                        </div>
                    </div>
                </div>
                <div className="fashion_image_wrapper">
                    <div className="fashion_image">
                        <Img className='img'/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Fashion
