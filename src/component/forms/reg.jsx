// From Uiverse.io by Yaya12085
import React from "react";
import { GoSignIn } from "react-icons/go";
const RegisterForm = ({ changeForm }) => {
  return (
    <form className="form">
      <p className="title">Register </p>
      <p className="message">Signup now and get full access to our app. </p>
      <div className="flex">
        <label>
          <input required placeholder="" type="text" className="input" />
          <span>Firstname</span>
        </label>

        <label>
          <input required placeholder="" type="text" className="input" />
          <span>Lastname</span>
        </label>
      </div>

      <label>
        <input required placeholder="" type="email" className="input" />
        <span>Email</span>
      </label>

      <label>
        <input required placeholder="" type="password" className="input" />
        <span>Password</span>
      </label>
      <label>
        <input required placeholder="" type="password" className="input" />
        <span>Confirm password</span>
      </label>
      <button className="submit">Submit</button>
      <p className="signin">
        Already have an account? Sign in <GoSignIn onClick={changeForm}
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

export default RegisterForm;
