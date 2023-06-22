import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FilteredAreaContext } from "../context/Context";

const BackBtn = () => {
  const { setFilteredArea } = useContext(FilteredAreaContext);
  // Hook für die navigation wird in navigate gespeichert
  const navigate = useNavigate();
  //   Funktion, die bei Onclick ausgelöst wird. Dabei wird der globale Context für Area zurückgesetzt, damit der User nicht die vorherige Area Filter aktiv hat
  const goOneBack = () => {
    setFilteredArea("");
    // Die Navigation geht immer um ein Schritt zurück
    navigate(-1);
  };

  return <button onClick={goOneBack}>Back</button>;
};

export default BackBtn;
