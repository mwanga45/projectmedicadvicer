import React, { useState } from "react";
import { FaRegistered } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ changeform }) => {
  const NavigateTo = useNavigate()
  const [formstate, setformstate] = useState({
    email:"",
    password:""
  })
  const [Message , setMessage] = useState([])
  const handleonchangeInput = (e)=>{
    e.preventDefault()
    const {name, value }= e.target
    setformstate((prev)=>({
      ...prev, [name]:value
    }))
  }
  const handleOnsubmit = async(e)=>{
    e.preventDefault()
    try{
      const resp = await axios.post("http://localhost:8080/login", formstate)
      if (resp.status === 200){
        setMessage(resp.data.message)
        setformstate({
          email:"",
          password:""
        })        
        NavigateTo("/home")
      } 
     
    } catch(err){
      console.error("something went wrong", err)
    }
  }
  return (
    <form className="form">
      <p className="title">Login</p>
      <p className="message">Create your username and password to register.</p>
      <label>
        <input required placeholder="" type="text" className="input" name="email" value={formstate.email} onChange={handleonchangeInput}/>
        <span>Email</span>
      </label>
      <label>
        <input required placeholder="" type="password" className="input" name="password" value={formstate.password} onChange={handleonchangeInput} />
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
