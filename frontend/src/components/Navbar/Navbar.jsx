import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import profile_img from "../Assets/Profile.png";
import axios from "axios";

const Navbar = () => {
  const [loggedin, setLoggedin] = useState(false);
  const fetchUserToken = async () => {
    try {
      const response = await fetch('http://localhost:5000/getcookie', {
        method: 'GET',
        credentials: 'include' // Necessary for cookies to be sent with the request
      });
      const data = await response.json(); // Parse the JSON response
      setLoggedin(data.success);
    } catch (error) {
      console.error('Error fetching user token:', error);
    }
  };
  
  
  useEffect(() => {
    fetchUserToken();
  }, []);
  
  
  return (
    <div id="nav-container">
      <div id="container-part-1">
        <Link style={{ textDecoration: "none", color: "#dadada" }} to={"/"}>
          <h1>Flexo</h1>
        </Link>
      </div>

      <div id="container-part-2">
        <Link
          style={{ textDecoration: "none", color: "#dadada" }}
          to={"/members"}
        >
          <h3>Find Members</h3>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "#dadada" }}
          to={"/updates"}
        >
          <h3>Updates</h3>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "#dadada" }}
          to={"/Achievements"}
        >
          <h3>Achievements</h3>
        </Link>
      </div>

      <div id="container-part-3">
        {loggedin ? (
          <Link to="/myprofile/userinfo">
            <img src={profile_img} alt="" className="user-profile" />
          </Link>
        ) : (
          <Link
            style={{ textDecoration: "none", color: "#dadada" }}
            to={"/login"}
          >
            <button>Login</button>
          </Link>
        )}

        <FontAwesomeIcon icon={faBars} className="menu-icon" />
      </div>
    </div>
  );
};

export default Navbar;
