import "./SearchAreasItem.css";
import { useEffect, useState } from "react";

const SearchAreasItem = (props) => {
  const filteredMeals = props.areaitemData;
  const [mealDetailData, setmealDetailData] = useState([]);
  useEffect(() => {
    fetch([filteredMeals])
      .then((res) => res.json())
      .then((data) => setmealDetailData(data))
      .catch((err) => console.log(`Fehler: ${err}`));
  }, [filteredMeals]);
  console.log(filteredMeals);
  return (
    <>
      {filteredMeals?.map((item, index) => (
        <article className="area-meal-item" key={index} value={item.idMeal}>
          <img src={item.strMealThumb} alt={item.strMeal} />
          {item.strMeal}
        </article>
      ))}
    </>
  );
};

export default SearchAreasItem;
