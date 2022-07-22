import React, {useState} from 'react'
import catalog from '../../../Images/catalog.png'
import security from '../../../Images/security.png'
import specialization from '../../../Images/specialization.png'

import catalogDesktop from '../../../Images/Images-new/catalog-desktop.png';
import safeDesktop from '../../../Images/Images-new/safe-desktop.png';
import specializationDesktop from '../../../Images/Images-new/specialization-desktop.png';
import './FeatureDesktop.css'

const FeaturesCusDesktop = () => {

    const [numCus, setCusNum] = useState({
        id_0: 1,
        id_1: 0,
        id_2: 0,
      })
      const [imgCusNum, setImgCusNum] = useState(0)
    
      const pc_one = () => {
        setCusNum({
          id_0: 1,
          id_1: 0,
          id_2: 0,
        })
       setImgCusNum(0)
      }
      const pc_two = () => {
        setCusNum({
          id_0: 0,
          id_1: 1,
          id_2: 0,
        })
       setImgCusNum(1)
      }
      const pc_three = () => {
        setCusNum({
          id_0: 0,
          id_1: 0,
          id_2: 1
        })
       setImgCusNum(2)
      }
    
  const imgCusArray = [catalogDesktop, safeDesktop, specializationDesktop]

    return (
        <div className="features-main">
            <div className="features-main-content_wrapper">
                <div className="features-main-content" onClick={pc_one} style={numCus.id_0 === 1 ? { boxShadow: "0 0 3px 3px rgb(0 0 0 / 10%)" } : { boxShadow: "none", borderBottom: "1px solid #aaa", borderRadius: "0" }}>
                    <div className="features-main-content-icon">
                        <img src={catalog} alt="payment" />
                    </div>
                    <div className="features-main-content-main">
                        <h1>Catalog</h1>
                        <p style={numCus.id_0 === 1 ? { display: "block" } : { display: "none" }}>You can now view from a vast of designs from all over Africa to choose from.</p>
                    </div>
                </div>
                <div className="features-main-content" onClick={pc_two} style={numCus.id_1 === 1 ? { boxShadow: "0 0 3px 3px rgb(0 0 0 / 10%)" } : { boxShadow: "none", borderBottom: "1px solid #aaa", borderRadius: "0" }}>
                    <div className="features-main-content-icon">
                        <img src={security} alt="payment" />
                    </div>
                    <div className="features-main-content-main">
                        <h1>Safe and Convenient</h1>
                        <p style={numCus.id_1 === 1 ? { display: "block" } : { display: "none" }}>Shopping on Kartlog is safe and convenient, all fashion designers have gone through our KYC process</p>
                    </div>
                </div>
                <div className="features-main-content" onClick={pc_three} style={numCus.id_2 === 1 ? { boxShadow: "0 0 3px 3px rgb(0 0 0 / 10%)" } : { boxShadow: "none", borderBottom: "1px solid #aaa", borderRadius: "0" }}>
                    <div className="features-main-content-icon">
                        <img src={specialization} alt="payment" />
                    </div>
                    <div className="features-main-content-main">
                        <h1>Specialization</h1>
                        <p style={numCus.id_2 === 1 ? { display: "block" } : { display: "none" }}>Every designer has their specialty. You can now choose from a vast majority of designers based on their specialty</p>
                    </div>
                </div>
            </div>
            <div className="features-main-img_wrapper">
                <div className="features-main-img">
                    <img src={imgCusArray[imgCusNum]} alt="img" />
                </div>
            </div>
        </div>

    )
}

export default FeaturesCusDesktop