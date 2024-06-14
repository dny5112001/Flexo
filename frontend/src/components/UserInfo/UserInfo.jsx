import React, { useState } from "react";
import axios from "axios";
import "./Userinfo.css";
import uploadarea from "../Assets/upload_area.svg";

const UserInfo = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [projectImage, setProjectImage] = useState(null);
  const [userdetails, setUserdetails] = useState({
    name: "",
    domain: "",
    github_link: "",
    LinkedIn_link: "",
    Instagram_link: "",
    phone: "",
    skills: [],
    projects: [],
  });
  const [project, setProject] = useState({
    name: "",
    description: "",
    link: "",
  });

  // Handler for input changes in user details
  const changehandler = (e) => {
    setUserdetails({
      ...userdetails,
      [e.target.name]: e.target.value,
    });
  };

  // Handler for input changes in project details
  const changeProjectHandler = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  // Handler for selecting profile image
  const ProfileImagehandler = (e) => {
    setProfileImage(e.target.files[0]);
  };

  // Handler for selecting project image
  const ProjectImagehandler = (e) => {
    setProjectImage(e.target.files[0]);
  };

  // Handler for adding a skill to user details
  const addSkillHandler = () => {
    const skillInput = document.getElementById("skill-input");
    const skill = skillInput.value;
    if (skill && !userdetails.skills.includes(skill)) {
      setUserdetails({
        ...userdetails,
        skills: [...userdetails.skills, skill],
      });
      skillInput.value = "";
    }
  };

  // Handler for adding a project to user details
  const addProjectHandler = () => {
    const newProject = { ...project };
    if (!userdetails.projects) {
      userdetails.projects = [];
    }
    userdetails.projects.push(newProject);
    setProject({
      name: "",
      description: "",
      link: "",
    });
    setProjectImage(null); // Clear project image input after adding project
  };

  // Handler for saving user details
  const savedetails = async () => {
    try {
      let profileImageUrl = "";
      if (profileImage) {
        // Upload profile image
        const profileFormData = new FormData();
        profileFormData.append("profile", profileImage);
        const profileResponse = await axios.post("http://localhost:5000/uploadProfile", profileFormData, {
          withCredentials: true,
        });
        profileImageUrl = profileResponse.data.image_url;
      }

      let projectImageUrl = "";
      if (projectImage) {
        // Upload project image
        const projectFormData = new FormData();
        projectFormData.append("projectProfile", projectImage);
        const projectResponse = await axios.post("http://localhost:5000/uploadProjectProfile", projectFormData, {
          withCredentials: true,
        });
        projectImageUrl = projectResponse.data.image_url;
      }

      // Prepare user profile data including uploaded image URLs
      const userProfileData = {
        ...userdetails,
        profile_image: profileImageUrl,
        projects: userdetails.projects.map((proj) => ({
          ...proj,
          image: projectImageUrl,
        })),
      };

      // Save user profile data
      const response = await axios.post("http://localhost:5000/addprofile", userProfileData, {
        withCredentials: true,
      });
      const responseData = response.data;
      if (responseData.success) {
        alert("Profile saved successfully!");
      } else {
        alert(responseData.data);
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Error encountered while saving profile");
    }
  };

  return (
    <div className="userinfo">
      <div className="userinfo-1">
        <div className="profilepic-selector">
          {/* Display profile image */}
          <label htmlFor="file-input">
            <img src={profileImage ? URL.createObjectURL(profileImage) : uploadarea} alt="Upload Area" />
          </label>
          {/* Input for selecting profile image */}
          <input type="file" hidden id="file-input" name="profileimage" onChange={ProfileImagehandler} />
        </div>
        <div>
          <h3>Your Profile</h3>
          <h4>Details</h4>
        </div>
      </div>

      <div className="userinfo-2">
        <div className="form1">
          <div>
            <p>Name</p>
            <input type="text" placeholder="Your Name" name="name" value={userdetails.name} onChange={changehandler} />
          </div>
          <div>
            <p>Domain</p>
            <input type="text" placeholder="Your Field" name="domain" value={userdetails.domain} onChange={changehandler} />
          </div>
        </div>

        <div className="form2">
          <div>
            <p>Github Link</p>
            <input type="url" placeholder="Your Github Link" name="github_link" value={userdetails.github_link} onChange={changehandler} />
          </div>
          <div>
            <p>Linked In Profile</p>
            <input type="url" placeholder="Your Linked In ID" name="LinkedIn_link" value={userdetails.LinkedIn_link} onChange={changehandler} />
          </div>
        </div>

        <div className="form3">
          <div>
            <p>Instagram Link</p>
            <input type="url" placeholder="Your Insta Link" name="Instagram_link" value={userdetails.Instagram_link} onChange={changehandler} />
          </div>
          <div>
            <p>Contact (Whatsapp)</p>
            <input type="tel" placeholder="Your Contact no." name="phone" value={userdetails.phone} onChange={changehandler} />
          </div>
        </div>
      </div>

      <div className="userinfo-3">
        <p>Skills</p>
        <div>
          <input type="text" placeholder="Add Skill" name="skills" id="skill-input" />
          <p onClick={addSkillHandler}>+</p>
        </div>
      </div>

      <div className="userinfo-4">
        <p>Add Project</p>
        <div className="project-container">
          <div>
            <label htmlFor="file-input-project">
              <img src={projectImage ? URL.createObjectURL(projectImage) : uploadarea} alt="Upload Area" />
            </label>
            <input type="file" hidden id="file-input-project" name="projectimage" onChange={ProjectImagehandler} />
          </div>
          <div className="projectDetails">
            <input type="text" placeholder="Project Title" name="name" value={project.name} onChange={changeProjectHandler} />
            <input type="text" placeholder="Short description" name="description" value={project.description} onChange={changeProjectHandler} />
            <input type="url" placeholder="Github link" name="link" value={project.link} onChange={changeProjectHandler} />
            <p onClick={addProjectHandler}>+</p>
          </div>
        </div>
        <div className="save">
          <button onClick={savedetails}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
