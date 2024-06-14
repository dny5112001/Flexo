import React from "react";
import "./MemberProfile.css";
import whatsapp from "../Assets/Whatsapp.png";
import linkedin from "../Assets/linked-in.png";
import insta from "../Assets/insta.png";
import { useLocation } from "react-router-dom";

const MemberProfile = () => {
  const location = useLocation();
  const details = location.state.details;

  return (
    <div className="MemberProfile">
      <div className="MemberProfile-1">
        <div className="MemberProfile-container">
          <img src={details.profileImg} alt="" />
        </div>

        <h2>{details.name}</h2>
        <div className="socials">
          <p>Connect with me:</p>
          <a href={details.phone} target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="Whatsapp" />
          </a>
          <a href={details.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href={details.instagram} target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="MemberProfile-2">
        <h3>Skills :</h3>
        <ul>
          {details.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="MemberProfile-3">
        <h3>Projects : </h3>
        {details.projects.map((project, index) => (
          <div key={index}>
            <div className="MemberProfile-3-img-container">
              <img src={project.project_image} alt="" />
            </div>

            <div className="project-details">
              <p style={{ textTransform: 'uppercase' }}>{project.name}</p>
              <p>{project.description}</p>
              <p onClick={() => window.open(project.link, '_blank')} style={{ textTransform: 'uppercase', cursor: 'pointer' }}>
                See Project
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberProfile;
