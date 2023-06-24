import "./Nav.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Home from "../images/nav-icon/Home.svg";
import Search from "../images/nav-icon/Search.svg";
import Heart from "../images/nav-icon/Heart.svg";
import Profile from "../images/nav-icon/Profile.svg";
import Darkmode from "../images/nav-icon/Darkmode";
import { useContext } from "react";
import {
  ThemeContext,
  ThemeDetailContext,
  NavBtnColorContext,
} from "../context/Context";
import HomeActive from "../images/nav-icon/HomeActive.svg";
import SearchActive from "../images/nav-icon/SearchActive.svg";
import HeartActive from "../images/nav-icon/HeartActive.svg";
import ProfileActive from "../images/nav-icon/ProfileActive.svg";

const Nav = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { themeDetailPage, setThemeDetailPage } =
    useContext(ThemeDetailContext);
  const { btnClicked, setBtnClicked } = useContext(NavBtnColorContext);

  const toggleTheme = () => {
    setTheme((darkMode) => !darkMode);
    setThemeDetailPage((darkMode) => !darkMode);
  };

  return (
    <section className="wrapper-nav">
      <nav className="navBar">
        <NavLink onClick={() => setBtnClicked("home")} to="/home">
          <img
            src={btnClicked === "home" ? HomeActive : Home}
            alt="Home-Button"
          />
        </NavLink>
        <NavLink onClick={() => setBtnClicked("search")} to="/search/input">
          <img
            src={btnClicked === "search" ? SearchActive : Search}
            alt="Search-Button"
          />
        </NavLink>
        <NavLink onClick={() => setBtnClicked("like")}>
          <img
            src={btnClicked === "like" ? HeartActive : Heart}
            alt="like-Button"
          />
        </NavLink>
        <NavLink onClick={() => setBtnClicked("profile")}>
          <img
            src={btnClicked === "profile" ? ProfileActive : Profile}
            alt="Profile-Button"
          />
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
