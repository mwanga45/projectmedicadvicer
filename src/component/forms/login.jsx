
import React from 'react';

const LoginForm = (changeform) => {
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
      {/* <button className="submit">Register</button>
      <p className="signin">
        Already have an account?Sign in <button onClick={changeform}> Already have an account?Sign in </button>
      </p> */}
    </form>
  );
};

export default LoginForm;
