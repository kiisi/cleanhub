import React, {useState} from 'react'
import './FeaturesMobile.css';
import measurement from '../../../Images/measurement.png'
import payment from '../../../Images/payment.png'
import marketplace from '../../../Images/marketplace.png'
import interaction from '../../../Images/interaction.png'
import measurementMobile from '../../../Images/Images-new/measure-mobile.jpg';
import paymentMobile from '../../../Images/Images-new/payment-mobile.jpg';
import manageMobile from '../../../Images/Images-new/manage-mobile.jpg';
import marketMobile from '../../../Images/Images-new/market-mobile.jpg';
const FeaturesMobile = () => {

    const [num, setNum] = useState({
    id_0: 1,
    id_1: 0,
    id_2: 0,
    id_3: 0
  })

  const p_one = () => {
    setNum({
      id_0: 1,
      id_1: 0,
      id_2: 0,
      id_3: 0
    })
  }
  const p_two = () => {
    setNum({
      id_0: 0,
      id_1: 1,
      id_2: 0,
      id_3: 0
    })
  }
  const p_three = () => {
    setNum({
      id_0: 0,
      id_1: 0,
      id_2: 1,
      id_3: 0
    })
  }
  const p_four = () => {
    setNum({
      id_0: 0,
      id_1: 0,
      id_2: 0,
      id_3: 1
    })
  }
    return (
        <div className="features-main-mb">
            <div className="features-main-content_wrapper-mb">
                <div className="features-main-content-mb" onClick={p_one}>
                    <div className="features-main-content-w-mb">
                        <div className="features-main-content-icon-mb">
                            <img src={measurement} alt="img" />
                        </div>
                        <div className="features-main-content-main-mb">
                            <h1>E-Measurements booklet</h1>
                            <p >Fashion Designers can view all clients measurement via client's profile. Measurements can always be updated.</p>
                        </div>
                    </div>
                    <div className="features-main-content-img-mb"style={num.id_0 === 1 ? { display: "block" } : { display: "none" }}>
                        <img src={measurementMobile} alt="img" />
                    </div>
                </div>
                <div className="features-main-content-mb" onClick={p_two}>
                    <div className="features-main-content-w-mb">
                        <div className="features-main-content-icon-mb">
                            <img src={payment} alt="img" />
                        </div>
                        <div className="features-main-content-main-mb">
                            <h1>E-Payments</h1>
                            <p>Fashion designers can receive payments digitally into E-wallet and can transfer to Bank. This enables them to keep track of all purchases</p>
                        </div>
                    </div>
                    <div className="features-main-content-img-mb"style={num.id_1 === 1 ? { display: "block" } : { display: "none" }}>
                        <img src={paymentMobile} alt="img" />
                    </div>
                </div>
                <div className="features-main-content-mb" onClick={p_three}>
                    <div className="features-main-content-w-mb">
                        <div className="features-main-content-icon-mb">
                            <img src={interaction} alt="img" />
                        </div>
                        <div className="features-main-content-main-mb">
                            <h1>Manage all interaction</h1>
                            <p>Manage all clients orders via a mobile. See every interactions on your store and what people are saying about it</p>
                        </div>
                    </div>
                    <div className="features-main-content-img-mb"style={num.id_2 === 1 ? { display: "block" } : { display: "none" }}>
                        <img src={manageMobile} alt="img" />
                    </div>
                </div>
                <div className="features-main-content-mb" onClick={p_four}>
                    <div className="features-main-content-w-mb">
                        <div className="features-main-content-icon-mb">
                            <img src={marketplace} alt="img" />
                        </div>
                        <div className="features-main-content-main-mb">
                            <h1>Market Place</h1>
                            <p>Kartlog is a market place big enough to accommodate your business. Get easy referrals and ratings</p>
                        </div>
                    </div>
                    <div className="features-main-content-img-mb" style={num.id_3 === 1 ? { display: "block" } : { display: "none" }}>
                        <img src={marketMobile} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesMobile
