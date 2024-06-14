import React from "react";
import "./CSS/Achievements.css";
import whatsapp from '../components/Assets/Whatsapp.png'
import linkedin from '../components/Assets/linked-in.png'
import insta from '../components/Assets/insta.png'
import acheivement from "../components/Assets/achievements";

const Achievements = () => {
  return (
    <div className="achievements">

    {
        acheivement.map((item)=>{
            return(
                <div className="achievements-container">

                <div className="img-container">
                  <img
                    src={item.image}
                    alt=""
                  />
                </div>
        
                <div className="info">
                  <h3>{item.name}</h3>
                 
                  <div className="info-2">
                  <p>
                    {item.description}
                  </p>
                  <div className="social-handles">
                    <img
                      src={whatsapp}
                      alt=""
                      onClick={() =>
                        window.open(item.social.whatsapp)
                      }
                    />
                    <img
                      src={linkedin}
                      alt=""
                      onClick={() =>
                        window.open(item.social.linkedin)
                      }
                    />
                    <img src={insta} alt="" />
                  </div>
                  </div>
        
                </div>
              </div>
            )
        })
    }
    </div>
  );
};

export default Achievements;
