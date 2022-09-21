import React from 'react'
import './Digital.css'
import {ReactComponent as Img} from '../../Images/Div2.svg'
const Fashion = () => {
    return (
        <div className="digital no-highlight">
            <div className="digital_content_wrapper">
                <div className="digital_content">
                    <div className="digital_content_header">
                        <h1>Get access to a market beyond boundaries and digitalize your business operations</h1>
                    </div>
                    <div className="digital_content_list">
                        <div className="digital_content_items">
                            <div className="check"><span class="material-icons">check_circle</span></div>
                            <div class="item">Kartlog enables fashion designers to reach out to a market without boundaries</div>
                        </div>
                        <div className="digital_content_items">
                            <div className="check"><span class="material-icons">check_circle</span></div>
                            <div class="item">Kartlog helps fashion designers document every business operations, making it easier to do business</div>
                        </div>
                        <div className="digital_content_items">
                            <div className="check"><span class="material-icons">check_circle</span></div>
                            <div class="item">Fashion designers can now sell seamlessly without stress</div>
                        </div>
                        <div className="btn btn-popup">Get Started</div>
                    </div>
                </div>
            </div>
            <div className="digital_image_wrapper">
                <div className="digital_image">
                    <Img className='img'/>
                </div>
            </div>
        </div>
    )
}

export default Fashion
