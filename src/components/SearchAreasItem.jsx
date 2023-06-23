import "./SearchAreasItem.css";
import { useEffect, useState } from "react";

const SearchAreasItem = (props) => {
  const filteredMeals = props.areaitemData;

  return (
    <>
      {filteredMeals?.map((item, index) => (
        <article className="area-meal-item" key={index} value={item.idMeal}>
          <div className="areaImageBox">
            <img src={item.strMealThumb} alt={item.strMeal} />
          </div>
          <p className="meal-name">{item.strMeal}</p>
        </article>
      ))}
    </>
  );
};

export default SearchAreasItem;
