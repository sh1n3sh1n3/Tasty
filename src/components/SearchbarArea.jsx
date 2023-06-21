import { useState } from "react";

import "./Search.css";

const SearchbarArea = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputVal = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };
  return (
    <>
      <section className="searchbar-area-container">
        <h1>SearchbarArea</h1>
        <input type="text" placeholder="Search" onChange={inputVal} />
      </section>
      <section className="area-buttons-container"></section>
    </>
  );
};

export default SearchbarArea;
