import React, { useState } from "react";
import { GoSignIn } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = ({ changeForm }) => {
  const navigateTo = useNavigate()
  const [Message , setMessage] = useState([])
  const [formstate , setformstate]= useState({
    firstname:"",
    secondname:"",
    email:"",
    password:""
  })
  const handleonchangeInput= (e)=>{
    const {name, value} = e.target
    setformstate((prev) => ({
      ...prev,
      [name]: value
    }));

  }
  // connection to the backend using axios library
  const handleOnsubmit = async (e) => {
    e.preventDefault()
    try{
      const respond  = await axios.post("http://localhost:8080/",formstate)
      if (respond.data === 200){
        setMessage("respond.data.message"||"something went wrong")
      }
      setMessage("respond.data.message" || "Successfully registered")
      navigateTo("/home")
    }catch(err){
      console.error("Something went wrong ", err)
    }

  }
  return (
    <form className="form">
      <p className="title">Register </p>
      <p className="message">Signup now and get full access to our app. </p>
      <div className="flex">
        <label>
          <input required placeholder="" type="text" className="input" name="firstname" value={formstate.firstname} onChange={handleonchangeInput} />
          <span>Firstname</span>
        </label>

        <label>
          <input required placeholder="" type="text" className="input" name="secondname" value={formstate.secondname}/>
          <span>Lastname</span>
        </label>
      </div>

      <label>
        <input required placeholder="" type="email" className="input" name="email" value={formstate.email} onChange={handleonchangeInput} />
        <span>Email</span>
      </label>

      <label>
        <input required placeholder="" type="password" className="input"  name="password" value ={formstate.password} onChange={handleonchangeInput} />
        <span>Password</span>
      </label>
      <label>
        <input required placeholder="" type="password" className="input" />
        <span>Confirm password</span>
      </label>
      <button className="submit" onClick={handleOnsubmit}>Submit</button>
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
