import { useState, useContext } from "react";
import { SearchTermAreaContext } from "../context/Context";
import "./Search.css";

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
      <section className="searchbar-area-container">
        <h1>SearchbarArea</h1>
        <input type="text" placeholder="Search" onChange={inputVal} className="searchBar"/>
      </section>
      <section className="area-buttons-container"></section>
    </>
  );
};

export default SearchbarArea;
