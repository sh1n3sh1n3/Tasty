import "./SearchInputItem.css";
import arrow from "../images/arrow-right.svg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react'

const SearchInputItem = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 870)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 870)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  let shortMeal = props.meal.strMeal
  shortMeal = shortMeal.length > 20 ? shortMeal.slice(0, 20) + '...' : shortMeal ;
  let longMeal = props.meal.strMeal
  longMeal = longMeal.length > 35 ? longMeal.slice(0, 35) + '...' : longMeal ;

  return (
      <NavLink to={`/detail/${props.meal.idMeal}`} >
        <article className="search-meal-item" value={props.meal.idMeal}>
          <img className="search-meal-img" src={props.meal.strMealThumb} alt={props.meal.strMeal} />
          <div className="search-meal-item-text">
            <h2 className='input-meal-name' style={isMobile ? { display: 'block' } : { display: 'none' }}>{longMeal}</h2>
            <h2 className='input-meal-name' style={!isMobile ? { display: 'block' } : { display: 'none' }}>{shortMeal}</h2>
            <p className="meal-name">
              <span className="dot">---</span>
              {props.meal.strCategory}
            </p>
          </div>
          <img className="meal-item-arrow" src={arrow} alt="arrow" />
        </article>
      </NavLink>
  );
};

export default SearchInputItem;