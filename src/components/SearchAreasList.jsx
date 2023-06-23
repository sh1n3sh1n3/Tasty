import { useEffect, useContext, useState } from "react";
import { FilteredAreaContext, SearchTermAreaContext } from "../context/Context";
import SearchAreasItem from "./SearchAreasItem";
import "./SearchAreasList.css";

const SearchAreasList = () => {
  const { filteredArea, setFilteredArea } = useContext(FilteredAreaContext);
  const { searchInputArea } = useContext(SearchTermAreaContext);
  const [filteredData, setFilteredData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  //   #Fetch der Produkte nach Area
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filteredArea}`
    )
      .then((response) => response.json())
      .then((data) => {
        setOriginalData(data.meals);
        setFilteredData(data.meals);
      })
      .catch((error) => {
        console.log("Fehler beim Laden", error);
      });
  }, [filteredArea]);

  //   #Filtern der bisherigen Suchergebnisse nach Inputfeld.Bedingung, wenn ein Input vorliegt und komplette Datensätze der Area geladen werden

  useEffect(() => {
    const filterData = () => {
      if (searchInputArea) {
        const filteredResults = originalData.filter((item) =>
          item.strMeal.toLowerCase().includes(searchInputArea.toLowerCase())
        );
        setFilteredData(filteredResults);
      } else {
        setFilteredData(originalData);
      }
    };

    filterData();
  }, [searchInputArea, originalData]);

  return (
    <>
      <section className="area-item-list">
        {filteredData ? (
          filteredData.map((meal, index) => {return <SearchAreasItem meal={meal} key={index} />})
        ) : (
          <p>loading data...</p>
        )}
      </section>
    </>
  );
};

export default SearchAreasList;
