import { useEffect, useState } from 'react'
import "./SearchAreasItem.css";
import { NavLink } from "react-router-dom";

const SearchAreasItem = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const shortMeal = props.meal.strMeal.slice(0, 9) + '...'
  let longMeal = props.meal.strMeal
  longMeal = longMeal.length > 40 ? longMeal.slice(0, 40) + '...' : longMeal ;

  return (
    <NavLink className='product-item-link' to={`/detail/${props.meal.idMeal}`} >
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
