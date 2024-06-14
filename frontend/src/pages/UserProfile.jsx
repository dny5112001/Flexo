import React from "react";
import "./CSS/UserProfile.css";
import {Outlet} from "react-router-dom";
import Slider from "../components/Slider/Slider";

const UserProfile = () => {
  return (
    <div className="userprofile">
        <Slider />
        <Outlet/>
    </div>
  );
};

export default UserProfile;
