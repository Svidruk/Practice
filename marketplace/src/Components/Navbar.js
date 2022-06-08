import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {  
    return  <div>
        <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
            <ul className='navbar-nav position-relative'>
                <li className='nav-item- m-1'>
                    <NavLink className="btn btn-light btn-outline-primary" to="/">Home</NavLink>
                </li>

                <li className='nav-item- m-1'>
                    <NavLink className="btn btn-light btn-outline-primary" to="/SignIn">Sign In</NavLink>
                </li>

                <li className='nav-item- m-1'>
                    <NavLink className="btn btn-light btn-outline-primary" to="/SignUp">Sign Up</NavLink>
                </li>
            </ul>
        </nav>
    </div>
}