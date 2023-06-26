import { useEffect, useState, useContext } from "react";
import "./AreasBtnSection.css";
import { FilteredAreaContext } from "../context/Context";

const AreasBtnSection = (props) => {
  const [areaNamesAll, setAreaNamesAll] = useState([]);
  const { filteredArea, setFilteredArea } = useContext(FilteredAreaContext);

  // # Fetch Area Names
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      .then((response) => response.json())
      .then((data) => {
        setAreaNamesAll(data.meals);
      })
      .catch((error) => {
        console.log("Fehler beim Laden", error);
      });
  }, []);

  // # Speichern des Inputfeldes auf der AreaPage

  const filterByArea = (e) => {
    setFilteredArea(e.target.value);
  };

  return (
    <>
      <section className="area-btn-wrapper">
        <article className="area-see-all-box">
          <h2 className="area-see-all">See All</h2>
        </article>
        <section className="area-btn-container">
          {areaNamesAll?.map((item, index) => (
            <button
              key={index}
              onClick={filterByArea}
              value={item.strArea}
              className={filteredArea === item.strArea ? "active" : ""}
            >
              {item.strArea}
            </button>
          ))}
        </section>
      </section>
    </>
  );
};

export default AreasBtnSection;
