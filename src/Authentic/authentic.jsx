import React from "react";
import RegisterForm from "../component/forms/reg";
import "./authentic.css";

export default function Authentic() {
  return (
    <div className="Authentic-maincontain">
      <div className="maincontainer-authentic">
        <div className="formcontainer-authentic">
        <div className="left-container">
          <RegisterForm/>
        </div>
        <div className="right"></div>
        </div>
      </div>
    </div>
  );
}
