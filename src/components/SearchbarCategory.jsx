import "./Search.css";
import Search2 from "../images/nav-icon/Search.svg";
import { SearchbarCategoryContext } from "../context/Context";
import { useContext, useState, useEffect } from "react";
import Mic from "../images/nav-icon/mic.svg";
import MicOn from "../images/nav-icon/mic-on.svg";
import { useSpeechRecognition } from "react-recipes";
import "./SearchbarArea.css";

const SearchbarCategory = () => {
  const { searchInputCategory, setSearchInputCategory } = useContext(
    SearchbarCategoryContext
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

  const inputVal = (e) => {
    if (e.target.value === "") {
      setValue("");
      setSearchInputCategory("");
      setPlaceholderTxt("Search");
    } else {
      setSearchInputCategory(e.target.value);
      setValue(e.target.value);
    }
  };

  if (!supported) {
    return "Speech Recognition is not supported. Upgrade your browser";
  }

  useEffect(() => {
    setValue(value);
    setSearchInputCategory(value);
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
    <section className="search-homepage-container">
      <div className="searchbar-wrapper">
        <img src={Search2} alt="lupe" />
        <input
          onChange={inputVal}
          type="text"
          placeholder={placeholderTxt}
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
      {listening}
      {ended}
    </section>
  );
};

export default SearchbarCategory;
