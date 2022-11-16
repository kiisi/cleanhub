import React from 'react'
import Card from '../../../components/Card/Card'
import './Howitworks.scss'
import ch1 from '../../../assets/ch1.PNG'
import ch2 from '../../../assets/ch2.PNG'
import ch3 from '../../../assets/ch3.PNG'
import ch4 from '../../../assets/ch4.PNG'

const Howitworks = () => {
  return (
    <div className="max-wrapper howitworks-wrapper">
        <div className="max-wrapper-content">
            <div className="howitworks">
                <div className="howitworks-title">
                    <h2 className="heading-sm">HOW IT WORKS</h2>
                    <h1 className="heading-lg">Make some cash from recycling that trash - Learn how it works </h1>
                </div>
                <div className="howitworks-content">
                    <Card img={ch1} title="PICK-UP" content="Relax and have us come do all the work. Schedule a pickup today and we'd be glad to head right up"/>
                    <Card img={ch2} title="DROP-OFF" content=" Find a dropoff center around you and deliver your recyclable waste locally"/>
                    <Card img={ch3} title="EARN POINTS" content="Earn KLIN points everytime you donate trash"/>
                    <Card img={ch4} title="CASH REDEMPTION" content="Get up to 100 KLIN points within 2 months and have your points converted to a cash or gift price, ready for redemption "/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Howitworks