import React, {useEffect} from 'react'

import Fashion from './Fashion/Fashion'
import Digital from './Digital/Digital'
import Features from './Features/Features'
import Activity from './Activity/Activity'
import GetStarted from './GetStarted/GetStarted'
import Header from './Header/Header'
import Faqs from './Faqs/Faqs'

const Main = () => {
  useEffect(() => {
     
    const popup = document.querySelector('.popup-container')
    const body = document.querySelector('body')

    const popupBtn = document.querySelectorAll(".btn-popup");	
    const btnFunc = () =>{ 
      popup.classList.add("show");
      body.classList.add("modal-open")
    }
    popupBtn.forEach(n => n.addEventListener('click', btnFunc))
     
   }, [])
  return (
    <div className="k-wrapper">
        <Header/>
        <Fashion/>
        <Digital/>
        <Features/>
        <Activity/>
        <GetStarted/>
        <Faqs/>
    </div>
  )
}

export default Main