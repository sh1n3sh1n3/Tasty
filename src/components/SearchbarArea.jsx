import { useState, useContext } from "react";
import { SearchTermAreaContext } from "../context/Context";
import "./Search.css";
import Search2 from '../images/nav-icon/Search.svg';

const SearchbarArea = () => {
  const { searchInputArea, setSearchInputArea } = useContext(
    SearchTermAreaContext
  );
  const inputVal = (e) => {
    setSearchInputArea(e.target.value);
    console.log(searchInputArea);
  };
  return (
    <>
      <section className="search-homepage-container">
        <div className="searchbar-wrapper">
          <img src={Search2} alt="" />
        <input type="text" placeholder="Search" onChange={inputVal} className="searchbar-input"/>
        </div>
      </section>
      <section className="area-buttons-container"></section>
    </>
  );
};

export default SearchbarArea;
