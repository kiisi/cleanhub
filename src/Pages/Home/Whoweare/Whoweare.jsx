import React from 'react'
import './Whoweare.scss'
import img from '../../../assets/image 1.png'

const Whoweare = () => {
  return (
    <div className="max-wrapper whoweare-wrapper">
        <div className="max-wrapper-content">
            <div className="whoweare">
                <div className="whoweare-img">
                    <img src={img} alt="img/"></img>
                </div>
                <div className="whoweare-content">
                    <h2 className="heading-sm">WHO WE ARE</h2>
                    <h1 className="heading-lg">Yes we believe in a cleaner and healthy LAGOS!</h1>
                    <p className="text-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris libero suspendisse in urna, fusce imperdiet aliquet. Tellus, mollis commodo turpis netus ultrices ut. Senectus in a vestibulum aliquet amet ornare tellus egestas. Condimentum sodales a faucibus eu enim.</p>
                    <div className="btn">LEARN MORE</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whoweare