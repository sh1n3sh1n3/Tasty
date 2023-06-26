import "./RandomMeal.css";
import { useEffect, useState } from "react";
//import { Link } from 'react-router-dom'
import Ellipse from "../images/Ellipse.png";
import { NavLink } from "react-router-dom";
const RandomMeal = () => {
  const [randomDish, setRandomDish] = useState();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((random) => {
        setRandomDish(random.meals[0]);
        //console.log(random.meals);
      })
      .catch((error) => {
        console.error("Fehler beim Fetch", error);
      });
  }, []);

  return (
    <>
      <div className="RandomMealSection">
        <h3 className="RandomDishTitle">Meal of the Day</h3>
        <NavLink to={`/detail/${randomDish?.idMeal}`}>
          <div className="RandomMealBox">
            <article className="RandomMealTextBox">
              <img
                className="RandomDishImg"
                src={randomDish?.strMealThumb}
                alt={randomDish?.strMeal}
              />
              <h2 className="RandomDishName">{randomDish?.strMeal}</h2>
              <div className="RandomDishCatAr">
                <div className="RandomDishCatPoint">
                  <img className="Ellipse" src={Ellipse} alt="Punkt" />
                  <p className="RandomDishCat">{randomDish?.strCategory}</p>
                </div>
                <p className="RandomDishAr">{randomDish?.strArea}</p>
              </div>
            </article>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default RandomMeal;
