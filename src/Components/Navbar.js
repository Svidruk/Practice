import React from "react";
import { NavLink } from "react-router-dom";
import { SearchBar } from './SearchBar';

export const Navbar = () => {  
    return  <div>
        <div className='navbar-container'>
            <ul className='navbar'>
                <li>
                    <NavLink className="navbtn" to="/">Home</NavLink>
                </li>
                <li> 
                    <SearchBar/>
                </li>
                <li>
                    <NavLink className="navbtn" to="/SignIn">Sign In</NavLink>
                </li>
                <li>
                    <NavLink className="navbtn" to="/SignUp">Sign Up</NavLink>
                </li>
            </ul>
        </div>
    </div>
}