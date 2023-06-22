import "./SearchInputItem.css";
import { useState, useEffect } from "react";

const SearchInputItem = (props) => {
  const searchedMeals = props.searchByNameData;

  return (
    <>
      {searchedMeals?.map((item, index) => (
        <article className="search-meal-item" key={index} value={item.idMeal}>
          <img src={item.strMealThumb} alt={item.strMeal} />
          <div className="search-meal-item-text">
            <h2 className="meal-name">{item.strMeal}</h2>
            <p className="meal-name">
              <span className="dot">---</span>
              {item.strCategory}
            </p>
          </div>
          {/* Muss kein Button sein. Kann auch als Div gestyled werden */}
          <button>details</button>
        </article>
      ))}
    </>
  );
};

export default SearchInputItem;
