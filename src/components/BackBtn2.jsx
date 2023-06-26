import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FilteredAreaContext } from "../context/Context";
import "./BackBtn2.css";
import ArrowRight from "../images/arrow-right.svg";
import DetailPageMenu from "./DetailPageMenu";

const BackBtn2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setFilteredArea } = useContext(FilteredAreaContext);
  // Hook für die navigation wird in navigate gespeichert
  const navigate = useNavigate();
  //   Funktion, die bei Onclick ausgelöst wird. Dabei wird der globale Context für Area zurückgesetzt, damit der User nicht die vorherige Area Filter aktiv hat
  const goOneBack = () => {
    setFilteredArea("American");
    // Die Navigation geht immer um ein Schritt zurück
    navigate(-1);
  };

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="Btn2-Wrapper">
      <div className="backArrow2">
        <button onClick={goOneBack} className="BackBtn2">
        <img className="dark-theme-arrow"  src={ArrowRight} alt="Back" />
        </button>
      </div>
      <div className="placeholder2"></div>
      <button onClick={menuToggle} className="menu-btn">
        {isMenuOpen ? "X" : "..."}
      </button>

      {isMenuOpen && <DetailPageMenu onCloseMenu={closeMenu} />}
    </div>
  );
};

export default BackBtn2;
