import React, { useEffect, useState, useRef } from 'react'
import './Input.scss'

const Input = ({type, labelText, value, setValue}) => {

    const [focus, setFocus] = useState(false)
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const labelRef = useRef()
    const inputRef = useRef()

    useEffect(()=>{
        const label = labelRef.current
        const input = inputRef.current

        label.addEventListener("click", ()=>{
            setFocus(true)
            input.focus()
        })

        input.addEventListener("focusout", ()=>{
            
            if(value !== ''){
                setFocus(true)
            }else{
                setFocus(false)
            }
        })

        input.addEventListener("focus", ()=>{
            setFocus(true)
        })

    },[value])

    const setPasswordVisibilityHandler = () =>{
        setPasswordVisibility(!passwordVisibility)
    }

  return (
    type.toLowerCase() === "password" ?
    <div className="input">
        <div className={focus ? "input-label active" : "input-label"} ref={labelRef}>{labelText}</div>
        <div className={focus ? "active input-main" : "input-main"}>
            <input type={passwordVisibility ? 'text' : 'password'}  ref={inputRef} value={value} onChange={setValue}/>
            <span onClick={setPasswordVisibilityHandler} className="material-icons">{passwordVisibility ? 'visibility' : 'visibility_off'}</span>
        </div>
    </div>
    :
    <div className="input">
        <div className={focus ? "input-label active" : "input-label"} ref={labelRef}>{labelText}</div>
        <div className={focus ? "active input-main" : "input-main"}>
            <input type={type}  ref={inputRef} value={value} onChange={setValue}/>
        </div>
    </div>


  )
}

export default Input