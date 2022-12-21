import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar()
{
    return(
        <div className="navBarLink">
            <NavLink exact to="/About" className='navBarLink'>About</NavLink>
            <span></span>
            <NavLink to="/HikingForm" className='navBarLink'>Hiking Form</NavLink>
            <span></span>
            <NavLink to="/HikingPage" className='navBarLink'>Hiking Page</NavLink>
            <span></span>
        </div>
    )
}

export default NavBar