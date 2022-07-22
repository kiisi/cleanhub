import React from 'react'
import './Features.css'
import { useMediaQuery } from 'react-responsive'

import FeaturesDesktop from './FeaturesDesktop/FeaturesDesktop'
import FeaturesMobile from './FeaturesMobile/FeaturesMobile'

import FeaturesCusDesktop from './FeaturesDesktop/FeaturesCusDesktop'
import FeaturesCusMobile from './FeaturesMobile/FeaturesCusMobile'




const Features = () => {
  const isBigScreen = useMediaQuery({ query: '(max-width: 880px)' })


  return (
    <section className="features_wrapper">
      <div className="features">
        <div className="features-header_wrapper">
          <div className="features-header-main">
            <h1>FEATURES</h1>
          </div>
          <div className="features-header-sub">
            <h1>Fashion Designers</h1>
            <p>You can now digitalize all your business operation</p>
          </div>
        </div>
        {isBigScreen ?
          <FeaturesMobile/>
          :
          <FeaturesDesktop
          />}
        <div className="features-header_wrapper features-space">
          <div className="features-header-sub">
            <h1>Customers</h1>
            <p>You can now digitalize your bespoke shopping experience</p>
          </div>
        </div>
        {isBigScreen ?
          <FeaturesCusMobile/>
          :
          <FeaturesCusDesktop
          />}
      </div>
    </section>
  )
}

export default Features