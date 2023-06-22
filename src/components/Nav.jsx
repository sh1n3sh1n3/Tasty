import './Nav.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../images/nav-icon/Home.svg';
import Search from '../images/nav-icon/Search.svg';
import Heart from '../images/nav-icon/Heart.svg';
import Profile from '../images/nav-icon/Profile.svg';
import Darkmode from '../images/nav-icon/Darkmode';
import { useContext } from "react";
import { ThemeContext } from '../context/Context';

const Nav = () => {
   const { theme, setTheme } = useContext(ThemeContext);
   const toggleTheme = () => {
      setTheme((darkMode) => !darkMode);
    };
    return (
       <section className='wrapper-nav'>
        <nav className='navBar'>
           <NavLink to="/home"><img src={Home} alt="Home-Button"/></NavLink>
           <NavLink to="/search/input"><img src={Search} alt="Search-Button" /></NavLink>
           <NavLink><img src={Heart} alt="like-Button" /></NavLink>
           <NavLink><img src={Profile} alt="Profile-Button" /></NavLink>
           <div onClick={toggleTheme}>
            <Darkmode />
          </div>
        </nav>
        <div className='wrapper-block'>
        <div className='block'></div>
        </div>
        </section>
     );
}
 
export default Nav;