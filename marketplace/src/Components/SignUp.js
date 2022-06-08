import React from "react";
import "../App.css";
import { SignUpForm } from "./SignUpForm";

export const SignUp = () => {  
    return  (
        <div className="container mt-4 ">
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <SignUpForm/>
                </div>
                <div className="col-md-7 my-auto">
                    <img className="img-fluid w-100" /*src={SomeImg}*/ alt=""/>
                </div>
            </div>
        </div>
    )
}