import React from 'react'
import "./Card.css";

const Cards= ({emoji,heading,detail,detail2,detail3,detail4}) => {
  return (
    <div className="card">
      <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <span>{detail2}</span>
        <span>{detail3}</span>
        <span>{detail4}</span>





    </div>
  )
}

export default Cards