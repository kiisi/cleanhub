import React, { useEffect } from 'react'
import './Fashion.css'
import {ReactComponent as Img} from '../../Images/fd.png'

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
                            <h1>The best of fashion designers, even your favorites are on Kartlog</h1>
                        </div>
                        <div className="fashion_content_list">
                            <div className="fashion_content_items">
                                <div className="check"><span className="material-icons">check_circle</span></div>
                                <div className="item">Kartlog connects you to the best fashion designers around beginning from your neighbourhood</div>
                            </div>
                            <div className="fashion_content_items">
                                <div className="check"><span className="material-icons">check_circle</span></div>
                                <div className="item">Kartlog is a thousand fashion magazine put together to help you stay in trend - A fashion Catalogue</div>
                            </div>
                            <div className="fashion_content_items">
                                <div className="check"><span className="material-icons">check_circle</span></div>
                                <div className="item">Shop universally without fear of trust and delay in delivery</div>
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
