import { useEffect, useState } from 'react'
import "./SearchAreasItem.css";
import { NavLink } from "react-router-dom";

const SearchAreasItem = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 567)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 567)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const shortMeal = props.meal.strMeal.slice(0, 9) + '...'
  const longMeal = props.meal.strMeal

  return (
    <NavLink to={`/detail/${props.meal.idMeal}`} >
      <article className="area-meal-item" >
          <div className="areaImageBox">
            <img src={props.meal.strMealThumb} alt={props.meal.strMeal} />
          </div>
          <div className='meal-name-wrapper'>
        <p className='meal-name-area' style={isMobile ? { display: 'flex' } : { display: 'none' }}>{shortMeal}</p>
        <p className='meal-name-area' style={!isMobile ? { display: 'flex' } : { display: 'none' }}>{longMeal}</p>
    </div>
      </article>
    </NavLink>
  );
};

export default SearchAreasItem;
