import "./SearchInputItem.css";
import { useState, useEffect } from "react";
import arrow from "../images/arrow-right.svg";
import { NavLink } from "react-router-dom";

const SearchInputItem = (props) => {
  const searchedMeals = props.searchByNameData;

  return (
    <section className="search-meal-wrapper">
      {searchedMeals?.map((item, index) => (
        <article className="search-meal-item" key={index} value={item.idMeal}>
          <img
            className="search-meal-img"
            src={item.strMealThumb}
            alt={item.strMeal}
          />
          <div className="search-meal-item-text">
            <h2 className="meal-name">{item.strMeal}</h2>
            <p className="meal-name">
              <span className="dot">---</span>
              {item.strCategory}
            </p>
          </div>
          <NavLink to={`/detail/${item.idMeal}`}>
            <img className="meal-item-arrow" src={arrow} alt="arrow" />
          </NavLink>
        </article>
      ))}
    </section>
  );
};

export default SearchInputItem;
