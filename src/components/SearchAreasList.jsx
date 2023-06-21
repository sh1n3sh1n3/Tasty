import "./SearchAreasList.css";
import { useEffect, useContext, useState } from "react";
import { FilteredAreaContext } from "../context/Context";
import SearchAreasItem from "./SearchAreasItem";

const SearchAreasList = () => {
  const { filteredArea, setFilteredArea } = useContext(FilteredAreaContext);
  const [filteredData, setFilteredData] = useState();
  // # Fetch Area Items
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filteredArea}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredData(data.meals);
      })
      .catch((error) => {
        console.log("Fehler beim Laden", error);
      });
  }, [filteredArea]);
  return (
    <>
      <h1>Search Areas List</h1>
      <section className="area-item-list">
        <SearchAreasItem areaitemData={filteredData}></SearchAreasItem>
      </section>
    </>
  );
};

export default SearchAreasList;
