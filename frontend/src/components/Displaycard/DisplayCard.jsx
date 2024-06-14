import React from 'react'
import './DisplayCard.css'

const DisplayCard = (props) => {
  return (
<div className="container1">
          <img src= {props.src} alt="" />
          <div>
          <p className="person-name">{props.name}</p>
          <p>{props.feild}</p>
          </div>

        </div>
  )
}

export default DisplayCard