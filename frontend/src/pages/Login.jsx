import React, { useState } from "react";
import "./CSS/Login.css";
import login_image from "../components/Assets/login.png";
import axios from "axios";

const Login =() => {
  const [login, setLogin] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changehandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const signup = async () => {
    console.log("signup is pressed");
    if (formData.password === formData.confirmPassword) {
      try {
        const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          credentials: 'include' // Necessary for cookies to be sent with the request
        });
        const data = await response.json();
        if (data.success) {
          window.location.replace("/");
        } else {
          alert("The user is not created");
        }
      } catch (error) {
        console.error('Error during signup:', error);
      }
    } else {
      alert("Passwords do not match.");
    }
  };
  

  const Login = async (e) => {
    e.preventDefault();
    console.log("Login Button is pressed");
    if (formData.email === "" || formData.password === "") {
      alert("Please fill all the fields");
    } else {
      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          credentials: 'include' // Necessary for cookies to be sent with the request
        });
        const data = await response.json();
        if (data.success) {
          window.location.replace("/");
        } else {
          alert("wrong password");
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
  };
  
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-image">
          <img src={login_image} alt="" />
        </div>

        <div className="login-2">
          <h2>WELCOME</h2>
          <span>{!login ? "Sign Up " : "Login "}to Continue</span>
          <div className="form">
            {!login ? (
              <>
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Name.."
                  name="name"
                  value={formData.name}
                  onChange={changehandler}
                />
              </>
            ) : null}
            <p>Email</p>
            <input
              type="email"
              placeholder="Email.."
              name="email"
              value={formData.email}
              onChange={changehandler}
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="Password.."
              name="password"
              value={formData.password}
              onChange={changehandler}
            />

            {!login ? (
              <>
                <p>Repeat Password</p>
                <input
                  type="confirmPassword"
                  placeholder="Repeat.."
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={changehandler}
                />
              </>
            ) : null}

            <div className="form-login">
              {!login ? (
                <>
                  <button onClick={signup} style={{ cursor: "pointer" }}>
                    Sign Up
                  </button>
                  <p>Already Have an Account?</p>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => setLogin(true)}
                  >
                    Login
                  </p>
                </>
              ) : (
                <>
                  <button onClick={Login}>Login Up</button>
                  <p>Don't Have an Account?</p>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => setLogin(false)}
                  >
                    Sign Up
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
