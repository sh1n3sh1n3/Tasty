import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FilteredAreaContext, ThemeContext } from "../context/Context";
import "./BackBtn.css";
import Arrow from "../images/BackBtn/Arrow.svg";
import ArrowRight from "../images/arrow-right.svg";

const BackBtn = () => {
  const { setFilteredArea } = useContext(FilteredAreaContext);
  const { theme, setTheme } = useContext(ThemeContext)

  // Hook für die navigation wird in navigate gespeichert
  const navigate = useNavigate();
  //   Funktion, die bei Onclick ausgelöst wird. Dabei wird der globale Context für Area zurückgesetzt, damit der User nicht die vorherige Area Filter aktiv hat
  const goOneBack = () => {
    setFilteredArea("American");
    // Die Navigation geht immer um ein Schritt zurück
    navigate(-1);
  };

  return (
    <div className="Btn-Wrapper">
      <div className="backArrow">
        <button onClick={goOneBack} className="BackBtn">
          <img style={ theme ? {display: "none"} : {display: "inline"} } src={Arrow} alt="Back" />
          <img className="dark-theme-arrow" style={ theme ? {display: "inline"} : {display: "none"} } src={ArrowRight} alt="Back" />
        </button>
      </div>
      <div className="search-headline">
        <h2>Search</h2>
      </div>
      <div className="placeholder"></div>
    </div>
  );
};

export default BackBtn;
