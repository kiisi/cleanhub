import React, {useState} from 'react'
import measurement from '../../../Images/measurement.png'
import payment from '../../../Images/payment.png'
import marketplace from '../../../Images/marketplace.png'
import interaction from '../../../Images/interaction.png'

import measurementDesktop from '../../../Images/Images-new/measure-desktop.png';
import paymentDesktop from '../../../Images/Images-new/payment-desktop.png';
import manageDesktop from '../../../Images/Images-new/manage-desktop.png';
import marketDesktop from '../../../Images/Images-new/market-desktop.png';
import './FeatureDesktop.css'

const FeaturesDesktop = () => {
    const [num, setNum] = useState({
        id_0: 1,
        id_1: 0,
        id_2: 0,
        id_3: 0
      })
      const [imgNum, setImgNum] = useState(0)
    
      const p_one = () => {
        setNum({
          id_0: 1,
          id_1: 0,
          id_2: 0,
          id_3: 0
        })
        setImgNum(0)
      }
      const p_two = () => {
        setNum({
          id_0: 0,
          id_1: 1,
          id_2: 0,
          id_3: 0
        })
        setImgNum(1)
      }
      const p_three = () => {
        setNum({
          id_0: 0,
          id_1: 0,
          id_2: 1,
          id_3: 0
        })
        setImgNum(2)
      }
      const p_four = () => {
        setNum({
          id_0: 0,
          id_1: 0,
          id_2: 0,
          id_3: 1
        })
        setImgNum(3)
      }
    
  const imgArray = [measurementDesktop, paymentDesktop, manageDesktop, marketDesktop]

    return (
        <div className="features-main">
            <div className="features-main-content_wrapper">
                <div className="features-main-content" onClick={p_one} style={num.id_0 === 1 ? { boxShadow: "0 0 3px 3px rgb(0 0 0 / 10%)" } : { boxShadow: "none", borderBottom: "1px solid #aaa", borderRadius: "0" }}>
                    <div className="features-main-content-icon">
                        <img src={measurement} alt="payment" />
                    </div>
                    <div className="features-main-content-main">
                        <h1>E-Measurements booklet</h1>
                        <p style={num.id_0 === 1 ? { display: "block" } : { display: "none" }}>Fashion Designers can now view all clients measurement in via client's profile. Measurements can always be updated.</p>
                    </div>
                </div>
                <div className="features-main-content" onClick={p_two} style={num.id_1 === 1 ? { boxShadow: "0 0 3px 3px rgb(0 0 0 / 10%)" } : { boxShadow: "none", borderBottom: "1px solid #aaa", borderRadius: "0" }}>
                    <div className="features-main-content-icon">
                        <img src={payment} alt="payment" />
                    </div>
                    <div className="features-main-content-main">
                        <h1>E-Payments</h1>
                        <p style={num.id_1 === 1 ? { display: "block" } : { display: "none" }}>Fashion Designers can now receive payments digitally into E-wallet and can transfer to Bank. This enables them to keep track of all purchases</p>
                    </div>
                </div>
                <div className="features-main-content" onClick={p_three} style={num.id_2 === 1 ? { boxShadow: "0 0 3px 3px rgb(0 0 0 / 10%)" } : { boxShadow: "none", borderBottom: "1px solid #aaa", borderRadius: "0" }}>
                    <div className="features-main-content-icon">
                        <img src={interaction} alt="payment" />
                    </div>
                    <div className="features-main-content-main">
                        <h1>Manage all interaction</h1>
                        <p style={num.id_2 === 1 ? { display: "block" } : { display: "none" }}>Manage all clients orders via a mobile app. See every interactions on your store and what people are saying about it</p>
                    </div>
                </div>
                <div className="features-main-content" onClick={p_four} style={num.id_3 === 1 ? { boxShadow: "0 0 3px 3px rgb(0 0 0 / 10%)" } : { boxShadow: "none", borderBottom: "1px solid #aaa", borderRadius: "0" }}>
                    <div className="features-main-content-icon">
                        <img src={marketplace} alt="payment" />
                    </div>
                    <div className="features-main-content-main">
                        <h1>Market Place</h1>
                        <p style={num.id_3 === 1 ? { display: "block" } : { display: "none" }}>Kartlog is a market place big enough to accommodate your business. Get easy referrals and ratings</p>
                    </div>
                </div>
            </div>
            <div className="features-main-img_wrapper">
                <div className="features-main-img">
                    <img src={imgArray[imgNum]} alt="img"/>
                </div>
            </div>
        </div>

    )
}

export default FeaturesDesktop