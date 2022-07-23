import React from 'react'
import './Activity.css'
import africa from '../../Images/Div3.svg'
const Activity = () => {
  return (
    <div className="activity">
      <div className="activity_content_wrapper">
        <div className="activity_content">
          <h1>What we do at Kartlog</h1>
          <p className="activity_content-p--first">Kartlog's mission is to enable african designers create storefront, digitize its everyday business operations and gain visibility through its end-to-end infrastructure and escrow platform.</p>
          <p>Kartlog helps fashion customers prioritizing consistency and efficiency over individuality, providing ease and comfort in the purchase of custom-made Clothing.</p>
        </div>
      </div>
      <div className="activity_image_wrapper">
        <div className="activity_image">
          <img src={africa} alt="africa"/>
        </div>
      </div>
    </div>
  )
}

export default Activity