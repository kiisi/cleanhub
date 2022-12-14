import React, { useState } from 'react'
import './Button.scss'

const Button = ({click, toggleHandler}) => {

    return (
        <div className="toggle-btn">
            <div onClick={toggleHandler} className={click ? "toggle-btn--circle toggle" : "toggle-btn--circle"}></div>
            <div className={click ? "toggle-btn--slider toggle" : "toggle-btn--slider"}></div>
        </div>
    )
}

export default Button