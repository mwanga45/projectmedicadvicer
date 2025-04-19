import React,{useState} from "react";
import RegisterForm from "../component/forms/reg";
import LoginFormForm from "../component/forms/login";
import "./authentic.css";

export default function Authentic() {
  const [isLogIn , setisLogin] = useState(true)
  // const handleToggleForm  = ()=>{
  //   setisLogin(!isLogIn)
  // }
  return (
    <div className="Authentic-maincontain">
      <div className="maincontainer-authentic">
        <div className="formcontainer-authentic">
        <div className="left-container">
          {isLogIn ?     
          <RegisterForm changeform = {()=> setisLogin(!isLogIn)}/> : <LoginFormForm changeform={()=> setisLogin(!isLogIn)}/>
          }
        </div>
        <div className="right"></div>
        </div>
      </div>
    </div>
  );
}
