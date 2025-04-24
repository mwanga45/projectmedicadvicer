import React, { useState } from "react";
import RegisterForm from "../component/forms/reg";
import LoginFormForm from "../component/forms/login";
import "./authentic.css";
import Navbar from "../component/navigation/navigation";

export default function Authentic() {
  const [isLogIn, setisLogin] = useState(true);
  return (
    <div className="Authentic-maincontain">
      <div className="maincontainer-authentic">
        <div className="formcontainer-authentic">
          <div className="left-container">
            {isLogIn ? (
              <RegisterForm changeForm={() => setisLogin(!isLogIn)} />
            ) : (
              <LoginFormForm changeForm={() => setisLogin(!isLogIn)} />
            )}
          </div>
          <div className="right-container">
            <h2>{isLogIn ? "Welcome Back!" : "Join Us Today!"}</h2>
            <p>
              {isLogIn
                ? "Already have an account? Log in to continue."
                : "Don't have an account yet? Register now."}
            </p>
            <button
              className="toggle-button"
              onClick={() => setisLogin(!isLogIn)}
            >
              {isLogIn ? "Switch to Login" : "Switch to Register"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
