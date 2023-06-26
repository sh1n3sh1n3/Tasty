import { useContext, useEffect, useRef, useState } from "react";
import { SearchTermAllProductsContext } from "../context/Context";
import "./Search.css";
import Search from "../images/nav-icon/Search.svg";
import Mic from "../images/nav-icon/mic.svg";
import MicOn from "../images/nav-icon/mic-on.svg";
import { useSpeechRecognition } from "react-recipes";
import "./SearchbarArea.css";

const SearchbarSearchAll = () => {
  const { searchInputAllProducts, setsearchInputAllProducts } = useContext(
    SearchTermAllProductsContext
  );
  const [placeholderTxt, setPlaceholderTxt] = useState("Search");
  const [micImgAnim, setMicImgAnim] = useState("mic-btn-img-static");
  const [micBtnImg, setMicBtnImg] = useState(Mic);
  const [value, setValue] = useState("");
  const [ended, setEnded] = useState(false);
  const onResult = (result) => setValue(result.join(""));
  const onEnd = () => setEnded(true);
  const { listen, listening, stop, supported } = useSpeechRecognition({
    onEnd,
    onResult,
  });

  // Erstelle eine Ref-Referenz für das Eingabefeld, damit der useEffect gestartet werden kann
  const inputRef = useRef(null);

  // Der Fokus des Eingabefeld wird gesetzt wird, wenn die Komponente geladen wird. Dies geschieht immer nach dem die Page geladen wurde
  useEffect(() => {
    // Fokussiere das Eingabefeld, da das Eingabefeld die Referenz ist
    inputRef.current.focus();
  }, []);

  // Funktion, die aufgerufen wird, wenn sich der Wert im Eingabefeld ändert

  const inputVal = (e) => {
    if (e.target.value === "") {
      setValue("");
      setsearchInputAllProducts("");
      setPlaceholderTxt("Search");
    } else {
      setsearchInputAllProducts(e.target.value);
      setValue(e.target.value);
    }
  };

  if (!supported) {
    return "Speech Recognition is not supported. Upgrade your browser";
  }

  useEffect(() => {
    setValue(value);
    setsearchInputAllProducts(value);
  }, [value]);

  const onListen = () => {
    listen({ lang: "en-EN", continuous: true });
    setPlaceholderTxt("I'm listening...");
    setMicBtnImg(MicOn);
    setMicImgAnim("mic-btn-img-animated");
  };

  const onStop = () => {
    setPlaceholderTxt("Search");
    setMicBtnImg(Mic);
    setMicImgAnim("mic-btn-img-static");
  };

  return (
    <>
      <form className="search-homepage-container">
        <div className="searchbar-wrapper">
          <img src={Search} alt="search-icon" />
          <input
            ref={inputRef}
            type="search"
            placeholder={placeholderTxt}
            onChange={inputVal}
            className="searchbar-input"
            value={value}
          />
          <div
            className="mic-btn-container"
            onMouseDown={onListen}
            onTouchCancel={stop}
            onTouchEnd={stop}
            onTouchMove={stop}
            onMouseOut={stop}
          >
            <button onMouseOut={onStop} type="button" className="mic-btn">
              <img className={micImgAnim} src={micBtnImg} alt="" />
            </button>
          </div>
        </div>
      </form>
      <section className="area-buttons-container"></section>
      {listening}
      {ended}
    </>
  );
};

export default SearchbarSearchAll;
