import "./Nav.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Home from "../images/nav-icon/Home.svg";
import Search from "../images/nav-icon/Search.svg";
import Heart from "../images/nav-icon/Heart.svg";
import Profile from "../images/nav-icon/Profile.svg";
import Darkmode from "../images/nav-icon/Darkmode";
import { useContext } from "react";
import { ThemeContext, ThemeDetailContext } from "../context/Context";
import HomeActive from "../images/nav-icon/HomeActive.svg";
import SearchActive from "../images/nav-icon/SearchActive.svg";
import HeartActive from "../images/nav-icon/HeartActive.svg";
import ProfileActive from "../images/nav-icon/ProfileActive.svg";

const Nav = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { themeDetailPage, setThemeDetailPage } =
    useContext(ThemeDetailContext);
  const [btnClicked, setBtnClicked] = useState("home");

  const toggleTheme = () => {
    setTheme((darkMode) => !darkMode);
    setThemeDetailPage((darkMode) => !darkMode);
  };

  return (
    <section className="wrapper-nav">
      <nav className="navBar">
        <NavLink onClick={() => setBtnClicked("home")} to="/home">
          {btnClicked == "home" ? (
            <img src={HomeActive} alt="Home-Button" />
          ) : (
            <img src={Home} alt="Home-Button" />
          )}
        </NavLink>
        <NavLink onClick={() => setBtnClicked("search")} to="/search/input">
          {btnClicked == "search" ? (
            <img src={SearchActive} alt="Search-Button" />
          ) : (
            <img src={Search} alt="Search-Button" />
          )}
        </NavLink>
        <NavLink onClick={() => setBtnClicked("like")}>
          {btnClicked == "like" ? (
            <img src={HeartActive} alt="like-Button" />
          ) : (
            <img src={Heart} alt="like-Button" />
          )}
        </NavLink>
        <NavLink onClick={() => setBtnClicked("profile")}>
          {btnClicked == "profile" ? (
            <img src={ProfileActive} alt="Profile-Button" />
          ) : (
            <img src={Profile} alt="Profile-Button" />
          )}
        </NavLink>

        <div onClick={toggleTheme}>
          <Darkmode />
        </div>
      </nav>
      <div className="block"></div>
    </section>
  );
};

export default Nav;
