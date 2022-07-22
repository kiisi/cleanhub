import React from 'react'
import './Digital.css'
import {ReactComponent as Img} from '../../Images/Div2.svg'
const Fashion = () => {
    return (
        <div className="digital no-highlight">
            <div className="digital_content_wrapper">
                <div className="digital_content">
                    <div className="digital_content_header">
                        <h1>Digitalize your everyday business operation and get access to a wider market</h1>
                    </div>
                    <div className="digital_content_list">
                        <div className="digital_content_items">
                            <div className="check"><span class="material-icons">check_circle</span></div>
                            <div class="item">Kartlog enables you to reach out to more global audience right from your mobile phone</div>
                        </div>
                        <div className="digital_content_items">
                            <div className="check"><span class="material-icons">check_circle</span></div>
                            <div class="item">Kartlog documents customer inventories including measurements, payments, customer birthdays and special events</div>
                        </div>
                        <div className="digital_content_items">
                            <div className="check"><span class="material-icons">check_circle</span></div>
                            <div class="item">Makes selling seamless and allow you concentrate on what you do best, creating better fashion designs</div>
                        </div>
                        <div className="btn btn-popup">Get App Now</div>
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