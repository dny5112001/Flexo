import React from 'react'
import './Flatcard.css'
import whatsapp from '../Assets/Whatsapp.png'
import linkedin from '../Assets/linked-in.png'
import insta from '../Assets/insta.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Flatcard = (props) => {
  const navigate = useNavigate();

  return (
    <div className='flatcard'>
       {/* <Link to={'/member-profile'}  style={{zIndex:999}} userimage ={props}> */}
       <div className="profile-img">
            <img src={props.profileImg} alt=""  onClick={()=>navigate("/member-profile",{state:{details:props}})}/>
        </div>
       
        {/* </Link> */}

        <div className="profile-info">
            <h2>{props.name}</h2>
            <h3>{props.role}</h3>
            <p>Hii !, I'm  {props.description} enthusiast</p>

            <div className="social-handles">
                <img src={whatsapp} alt=""  onClick={()=>window.open(props.phone,'_blank')} />
                <img src={linkedin} alt="" onClick={()=>window.open(props.linkedin,'_blank')} />
                <img src={insta} alt="" onClick={()=>window.open(props.insta,'_blank')}/>
            </div>
        </div>
    </div>
  )
}

export default Flatcard