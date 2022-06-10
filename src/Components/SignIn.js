import React from "react";
import "../App.css";
import { SignInForm } from "./SignInForm";
import img from "../Assets/pexels-karolina-grabowska 2.png"
import cross from "../Assets/cross.png"
import { useNavigate } from "react-router-dom";

export const SignIn = () => {  
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/`; 
      navigate(path);
    }
    return  (
        <div>
            <div className="login-container">
                <div className="img-container">
                    <img className="resize2" src={img} alt=""/>
                </div>
                <div className="form-container">
                    <SignInForm/>
                    <h4 className="link-label"> 
                        Next user ? 
                        <a className="link" href={"/SignUp"}> Sign up</a>
                    </h4>
                </div>
                <button className="cross" onClick={routeChange}>
                    <img alt="X" type="image" src={cross}/>
                </button>
            </div>
        </div>
    )
}