import React from 'react'
import './CSS/Updates.css'
import updates from '../components/Assets/Hackathon'
const Updates = () => {
  return (
    <div className='updates'>

      {
        updates.map((item)=>{
          return(
            <div className="updates-container">
            <h1>{item.title}</h1>
            <p>{item.content}</p>
            <div className="hack-apply">
                <p>End Date: {item.hackathonEndDate} </p>
                <button onClick={()=>window.open(item.applyLink)}>Apply →</button>
            </div>
        </div>
          )
        })
      }

    </div>
  )
}

export default Updates