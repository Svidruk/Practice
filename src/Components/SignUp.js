import React from "react";
import "../App.css";
import { SignUpForm } from "./SignUpForm";
import img1 from "../Assets/pexels-karolina-grabowska.png"
import cross from "../Assets/cross.png"
import { useNavigate } from "react-router-dom";

export const SignUp = () => {  
    let navigate = useNavigate(); 
    const routeChange = () =>{  
        let path = `/`; 
        navigate(path);
    }
    return  (
        <div>
            <div className="login-container">
                <div className="img-container">
                    <img className="resize" src={img1} alt="img"/>
                </div>
                <div className="form-container">
                    <SignUpForm/>
                    <h4 className="link-label2"> 
                        Back to 
                        <a className="link" href={"/SignIn"}> login</a>
                    </h4>
                </div>
                <button className="cross" onClick={routeChange}>
                    <img alt="X" type="image" src={cross}/>
                </button> 
            </div> 
        </div>
    )
}