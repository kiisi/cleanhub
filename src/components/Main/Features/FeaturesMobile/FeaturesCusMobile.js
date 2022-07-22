import React, {useState} from 'react'
import './FeaturesMobile.css';
import catalog from '../../../Images/catalog.png'
import security from '../../../Images/security.png'
import specialization from '../../../Images/specialization.png'
import catalogMobile from '../../../Images/Images-new/catalog-mobile.jpg';
import safeMobile from '../../../Images/Images-new/safe-mobile.jpg';
import specializationMobile from '../../../Images/Images-new/specialization-mobile.jpg';
const FeaturesCusMobile = () => {
    const [numCus, setCusNum] = useState({
        id_0: 1,
        id_1: 0,
        id_2: 0,
      })
    
      const pc_one = () => {
        setCusNum({
          id_0: 1,
          id_1: 0,
          id_2: 0,
        })
      }
      const pc_two = () => {
        setCusNum({
          id_0: 0,
          id_1: 1,
          id_2: 0,
        })
      }
      const pc_three = () => {
        setCusNum({
          id_0: 0,
          id_1: 0,
          id_2: 1
        })
      }
    

    return (
        <div className="features-main-mb">
            <div className="features-main-content_wrapper-mb">
                <div className="features-main-content-mb" onClick={pc_one}>
                    <div className="features-main-content-w-mb">
                        <div className="features-main-content-icon-mb">
                            <img src={catalog} alt="img" />
                        </div>
                        <div className="features-main-content-main-mb">
                            <h1>Catalog</h1>
                            <p >You can now view from a vast collection of designs from all over Africa to choose from.</p>
                        </div>
                    </div>
                    <div className="features-main-content-img-mb"style={numCus.id_0 === 1 ? { display: "block" } : { display: "none" }}>
                        <img src={catalogMobile} alt="img" />
                    </div>
                </div>
                <div className="features-main-content-mb" onClick={pc_two}>
                    <div className="features-main-content-w-mb">
                        <div className="features-main-content-icon-mb">
                            <img src={security} alt="img" />
                        </div>
                        <div className="features-main-content-main-mb">
                            <h1>Safe and Convenient</h1>
                            <p>Shopping on Kartlog is safe and convenient, all fashion designers have gone through our KYC process</p>
                        </div>
                    </div>
                    <div className="features-main-content-img-mb"style={numCus.id_1 === 1 ? { display: "block" } : { display: "none" }}>
                        <img src={safeMobile} alt="img" />
                    </div>
                </div>
                <div className="features-main-content-mb" onClick={pc_three}>
                    <div className="features-main-content-w-mb">
                        <div className="features-main-content-icon-mb">
                            <img src={specialization} alt="img" />
                        </div>
                        <div className="features-main-content-main-mb">
                            <h1>Specialization</h1>
                            <p>Every designer has their specialty. You can now choose from a vast majority of designers based on their specialty</p>
                        </div>
                    </div>
                    <div className="features-main-content-img-mb"style={numCus.id_2 === 1 ? { display: "block" } : { display: "none" }}>
                        <img src={specializationMobile} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesCusMobile