import React, { useRef, useState } from 'react'
import './Faqs.css'

const Faqs = () => {

  const [click, setClick] = useState(true)
  const contentMainRef = useRef()

  const faqsHandler = () =>{
    
    


   
  }

  return (
    <div className="faqs-wrapper">
      <div className="faqs-container">
        <div className="faqs">
          <div className="faqs-header">
            <h1>FAQs</h1>
          </div>
          <div className="faqs-content-wrapper">
            <div className="faqs-content">
              <div className="faqs-content-header" onClick={faqsHandler}>
                <p>What is Kartlog and how it work </p>
                <div className="faqs-icon"><span className="material-icons">add</span></div>
              </div>
              <div className="faqs-content-main"ref={contentMainRef}>
                Kartlog is a bespoke fashion company that offers the Kartlog mobile app, a platform that connects customers to fashion designers across Africa. Kartlog servers as an updated catalog and a marketplace to fashion customers and a complete set of business tools and marketplace to fashion designers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs