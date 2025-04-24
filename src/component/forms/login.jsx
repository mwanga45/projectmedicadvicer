import React from "react";
import { FaRegistered } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ changeform }) => {
  const NavigateTo = useNavigate()
  const handleOnsubmit = ()=>{
     
     NavigateTo("/home")
  }
  return (
    <form className="form">
      <p className="title">Register</p>
      <p className="message">Create your username and password to register.</p>
      <label>
        <input required placeholder="" type="text" className="input" />
        <span>Username</span>
      </label>
      <label>
        <input required placeholder="" type="password" className="input" />
        <span>Password</span>
      </label>
      <button className="submit" onClick={handleOnsubmit}>Submit</button>
      <p className="signin">
      I dont have an account please : register first? 
        <FaRegistered onClick={changeform}
        size={20}
        style={{
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
          padding: '10px',
          color: '#333', // optional
          backgroundColor: '#f0f0f0' // optional
        }}
      />

      </p>
    </form>
  );
};

export default LoginForm;
