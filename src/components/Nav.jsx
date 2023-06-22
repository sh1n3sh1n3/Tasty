import './Nav.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../images/nav-icon/Home.svg';
import Search from '../images/nav-icon/Search.svg';
import Heart from '../images/nav-icon/Heart.svg';
import Profile from '../images/nav-icon/Profile.svg';

const Nav = () => {
    return ( 
        <nav className='navBar'>
           <NavLink to="/home"><img src={Home} alt="Home-Button"/></NavLink>
           <NavLink to="/search/input"><img src={Search} alt="Search-Button" /></NavLink>
           <NavLink><img src={Heart} alt="like-Button" /></NavLink>
           <NavLink><img src={Profile} alt="Profile-Button" /></NavLink>
        </nav>
     );
}
 
export default Nav;