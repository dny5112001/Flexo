import React from "react";
import "./CSS/Homepage.css";
import DisplayCard from "../components/Displaycard/DisplayCard";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
  <div className="homepage-container">

         {/* Home Top left  */}
      <div className="homepage-container-left ">
        <div>
          <h1>
            Welcome to FLEXO 😎 {"   "}
            <span>
              <button>Explore</button>
            </span>
          </h1>
        </div>

        <p>
          "Join us here to form groups for hackathons, competitions, and
          projects aligned with your passions."
        </p>
      </div>
       {/* Home Display cards  */}
      <div className="home-container1">
        <DisplayCard
          src="https://cdn.imgchest.com/files/345xck3w2z7.png"
          name="Deepak Yadav"
          feild="web developer"
        />
      </div>
      <div className="home-container2">
        <DisplayCard
          src="https://cdn.imgchest.com/files/3yrgck3oek4.png"
          name="Aditya Yadav"
          feild="Data Analysts"
        />
      </div>
      <div className="home-container3">
        <DisplayCard
          src="https://cdn.imgchest.com/files/pyq9c5m8mo4.png"
          name="Karan Sharma"
          feild="web developer"
        />
      </div>

      {/* Home  selection category */}

      <div className="domain-selection-category">
        <Link to={"/web"} style={{textDecoration:'none',color:'#dadada'}}><p>Web Development</p></Link>
        <Link to={"/web"} style={{textDecoration:'none',color:'#dadada'}}><p>Android Development</p></Link>
        <Link to={"/web"} style={{textDecoration:'none',color:'#dadada'}}><p>Data Analysis</p></Link>
        <Link to={"/web"} style={{textDecoration:'none',color:'#dadada'}}><p>BlockChain</p></Link>
      </div>


      {/* Connection message */}

      <div className="homepage-connect-option">

        <div className="homepage-connect-option-img-container">    
          <img src="https://www.starktechacademy.com/wp-content/uploads/2023/08/%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99-coding-%E0%B8%84%E0%B8%B7%E0%B8%AD.jpg" alt="" className="homepage-connect-option-img-content" />
        </div>
    
        <div className="homepage-connect-text">
          <span>Connect to compete</span>
          <div>
          <p>Flexo offers a platform facilitating users to discover individuals sharing akin interests and collaboratively assemble teams for participation in hackathons.</p>
          <button>Contact Us</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
