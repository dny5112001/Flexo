import React from "react";
import { Link } from "react-router-dom";
import "./Slider.css";
import axios from "axios";

const Slider = () => {
  const logout = async () => {
    try {
      const response = await fetch("http://localhost:5000/logout", {
        method: 'GET',
        credentials: 'include' // This is important for sending cookies
      });
      const data = await response.json();
      if (data.success) {
        window.location.replace("/");
      } else {
        alert(data.success);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  
  return (
    <div className="slider">
      <h2>Your Profile</h2>
      <div className="slider-1">
        <Link to="userinfo" style={{ textDecoration: "none" }}>
          <button className="sidebar-item">User Info</button>
        </Link>
        <Link to="group" style={{ textDecoration: "none" }}>
          <button className="sidebar-item">Group</button>
        </Link>
        <Link to="notification" style={{ textDecoration: "none" }}>
          <button className="sidebar-item">Notification</button>
        </Link>
        <Link to="viewprofile" style={{ textDecoration: "none" }}>
          <button className="sidebar-item">View Profile</button>
        </Link>
        <button className="sidebar-item" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Slider;
