import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FilteredAreaContext } from "../context/Context";
import "./BackBtn.css";
import Arrow from "../images/BackBtn/Arrow.svg";
import DetailPageMenu from "./DetailPageMenu";

const BackBtn = () => {
  const { setFilteredArea } = useContext(FilteredAreaContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <div className="Btn-Wrapper">
      <div className="backArrow">
        <button onClick={goOneBack} className="BackBtn">
          <img src={Arrow} alt="Back" />
        </button>
      </div>
      <div className="search-headline">
        <h2>Search</h2>
      </div>
      <div className="placeholder" />
      <button onClick={menuToggle} className="menu-btn">
        {isMenuOpen ? "X" : "..."}
      </button>
      {isMenuOpen && <DetailPageMenu onCloseMenu={closeMenu} />}
    </div>
  );
};

export default BackBtn;
