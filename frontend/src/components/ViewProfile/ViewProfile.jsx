import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ViewProfile.css";
import whatsapp from "../Assets/Whatsapp.png";
import linkedin from "../Assets/linked-in.png";
import insta from "../Assets/insta.png";

const ViewProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getuser", { withCredentials: true });
        const responseData = response.data;

        if (responseData.success) {
          setProfile(responseData.data);
        } else {
          alert(responseData.data);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        alert("An error occurred while fetching the profile data.");
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="viewProfile">
      <div className="viewProfile-1">
        <div className="viewprofile-container">
          <img src={profile.profile_image} alt="Profile" />
        </div>

        <h2>{profile.name}</h2>
        <div className="socials">
          <p>Connect with me:</p>
          <a href={`https://wa.me/${profile.phone}`} target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="WhatsApp" />
          </a>
          <a href={profile.LinkedIn_link} target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href={profile.Instagram_link} target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="viewProfile-2">
        <h3>Skills :</h3>
        <ul>
          {profile.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="viewProfile-3">
        <h3>Projects :</h3>
        {profile.projects.map((project, index) => (
          <div key={index}>
            <div className="viewProfile-3-img-container">
              <img src={project.project_image} alt={project.name} />
            </div>
            <div className="project-details">
              <p style={{ textTransform: 'uppercase' }}>{project.name}</p>
              <p>{project.description}</p>
              <p
                onClick={() => window.open(project.link)}
                style={{ textTransform: 'uppercase', cursor: 'pointer' }}
              >
                See Project
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProfile;
