import React, { useEffect } from 'react'
import './Faqs.css'

const Faqs = () => {
  

  

  useEffect(() => {
    
    const contentHeaders = document.querySelectorAll(".faqs-content .faqs-content-header")
    
    contentHeaders.forEach(contentHeader=>{
      contentHeader.addEventListener('click',()=>{
        let icon = contentHeader.children.item(1).children.item(0)
        let p = contentHeader.children.item(0)

        const contentMain = contentHeader.nextElementSibling
        if(!contentMain.classList.contains("effect")){
          icon.textContent = 'remove'
          p.style.color = "#0777A1"
          contentMain.classList.add("effect")
          contentMain.style.height = 'auto'
  
          const contentMainHeight= contentMain.clientHeight + "px"
          
          contentMain.style.height = '0px'
  
          setTimeout(function(){
          contentMain.style.height = contentMainHeight
          }, 0)
          
      }
      else{
        icon.textContent = 'add'
        p.style.color = "#484848"
        contentMain.style.height = '0px'
        contentMain.addEventListener('transitionend',()=>{
          contentMain.classList.remove('effect')
        },{
          once:true
        })
      }  
      })
    })
    
  },[])
  

  

  return (
    <div className="faqs-wrapper">
      <div className="faqs-container">
        <div className="faqs">
          <div className="faqs-header">
            <h1>FAQs</h1>
          </div>
          <div className="faqs-content-wrapper">
            <div className="faqs-content">
              <div className="faqs-content-header">
                <p>What is Kartlog and how it work </p>
                <div className="faqs-icon"><span className="material-icons">add</span></div>
              </div>
              <div className="faqs-content-main">
                Kartlog is an fashion tech comapny that offers a platform (marketplace) service for fashion designers and fashion customers across Africa. 
                Kartlog serves as a marketplace to fashion customers and an updated style catalog to help users stay in touch with fashion trends. <br/> <br/>
                To fashion designers, Kartlog is a complete set of business tools to help digitalize their business process and a marketplace that gives them 
                access to wider market that cuts across geographical boundaries.
              </div>
            </div>
            <div className="faqs-content">
              <div className="faqs-content-header">
                <p>How it works</p>
                <div className="faqs-icon"><span className="material-icons">add</span></div>
              </div>
              <div className="faqs-content-main">
                <span>Fashion Customers: </span> First, download the app, sign up for Kartlog, define your style and input your measurement 
                (we have a video to guide you through the process). From your timeline, you have access to creative designs uploaded by fashion designers across Africa, 
                 Choose particular designs and designer to help get it done. <br/>
                <span>Fashion Designers: </span> Kartlog for Fashion designers Fashion designers are to download the app, set up an account, onboard customers by sending invite 
                links. Then they have to set up their stores and are ready for business.
              </div>
            </div>
            <div className="faqs-content">
              <div className="faqs-content-header">
                <p>How does Kartlog deal with the issue of what i ordered vs what i got</p>
                <div className="faqs-icon"><span className="material-icons">add</span></div>
              </div>
              <div className="faqs-content-main">
                First, Kartlog operates on rating systems, where fashion designers get customers ratings to put them ina good place. So customers look out for ratings and designers' history.<br/>Secondly, Kartlog offers money back guarantee to customers after investigating source of the issue and customer is not found wanting
              </div>
            </div>
            <div className="faqs-content">
              <div className="faqs-content-header">
                <p>Do I need a physical business location as a fashion designer to get onboard?</p>
                <div className="faqs-icon"><span className="material-icons">add</span></div>
              </div>
              <div className="faqs-content-main">
                Every fashion designer must provide a workspace as part of our KYC process. Moreover fashion designers can make use of their residents in the case of not having a business location
              </div>
            </div>
            <div className="faqs-content">
              <div className="faqs-content-header">
                <p>How does Kartlog handle payment issues?</p>
                <div className="faqs-icon"><span className="material-icons">add</span></div>
              </div>
              <div className="faqs-content-main">
                Every payment is made to Kartlog at the time the job is issued out to the fashion designer, Kartlog makes payment available to the fashion designer once the job is complete.
              </div>
            </div>
            <div className="faqs-content">
              <div className="faqs-content-header">
                <p>Who are Logistics Partners and how do I get onboard as a logistic partner</p>
                <div className="faqs-icon"><span className="material-icons">add</span></div>
              </div>
              <div className="faqs-content-main">
                Logistics partners are logistics companies from every region who partner with Kartlog for pickup and deliveries in every city. Becoming a logistic partner only involves filling the Logistics partnership form on the website or by contacting us at Logistics@Kartlog.co
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs
