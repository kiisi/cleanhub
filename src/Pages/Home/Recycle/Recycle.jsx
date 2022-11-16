import React from 'react'
import './Recycle.scss'
import cr1 from '../../../assets/cr1.PNG'
import cr2 from '../../../assets/cr2.PNG'
import cr3 from '../../../assets/cr3.PNG'
import cr4 from '../../../assets/cr4.PNG'
import cr5 from '../../../assets/cr5.PNG'
import cr6 from '../../../assets/cr6.PNG'
import cr7 from '../../../assets/cr7.PNG'

const Recycle = () => {
    return (
        <div className="max-wrapper recycle">
            <div className="recycle-img">
                <div>
                    <div className="recycle-cards">
                        <div className="recycle-cards-img">
                            <img src={cr1} alt="img"/>
                        </div>
                        <p>GLASSES</p>
                    </div>
                    <div className="recycle-cards">
                        <div className="recycle-cards-img">
                            <img src={cr2} alt="img"/>
                        </div>
                        <p>NYLON BAGS</p>
                    </div>
                    <div className="recycle-cards">
                        <div className="recycle-cards-img">
                            <img src={cr3} alt="img"/>
                        </div>
                        <p>CARTONS</p>
                    </div>
                    <div className="recycle-cards">
                        <div className="recycle-cards-img">
                            <img src={cr4} alt="img"/>
                        </div>
                        <p>PAPERS</p>
                    </div>
                    <div className="recycle-cards">
                        <div className="recycle-cards-img">
                            <img src={cr5} alt="img"/>
                        </div>
                        <p>PLASTICS</p>
                    </div>
                    <div className="recycle-cards">
                        <div className="recycle-cards-img">
                            <img src={cr6} alt="img"/>
                        </div>
                        <p>BATTERIES</p>
                    </div>
                    <div className="recycle-cards">
                        <div className="recycle-cards-img">
                            <img src={cr7} alt="img"/>
                        </div>
                        <p>CANS</p>
                    </div>
                    <div className="recycle-circle">
                        More&gt;&gt;
                    </div>
                </div>
            </div>
            <div className="recycle-content">
                <div>
                    <h1 className="heading-lg">Confused about how to sort or
                        what is recyclable?</h1>
                    <p className="text-p">Find out what goes where</p>
                </div>
            </div>
        </div>
    )
}

export default Recycle