import React from 'react'
import './Card.scss'

const Card = ({img, title, content}) => {
  return (
    <div className="card">
      <img src={img} alt="card-img" />
      <p>{title}</p>
      <div className="card-content">
        {content}
      </div>
    </div>

  )
}

export default Card