import BackBtn2 from "../components/BackBtn2";
import Ingredients from "../components/Ingredients";
import Instructions from "../components/Instructions";
import Nav from "../components/Nav";
import Toggle from "../components/Toggle";
import "./Details.css";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeDetailContext } from "../context/Context";
import { usePrint } from "react-recipes";

const Details = () => {
  const [printData, setPrintData] = useState("recipe-informations-print-off");
  const params = useParams();
  const idDish = params.id;
  const [mealData, setMealData] = useState();
  const { themeDetailPage, setThemeDetailPage } =
    useContext(ThemeDetailContext);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idDish}`)
      .then((res) => res.json())
      .then((data) => {
        setMealData(data.meals[0]);
      })
      .catch((error) => {
        console.error("Fehler beim Fetch", error);
      });
  }, []);

  return (
    <section
      className="detail-site-container"
      style={{ backgroundImage: `url(${mealData?.strMealThumb})` }}
    >
      <BackBtn2 />
      <section
        className={
          themeDetailPage ? "detail-section-dark" : "detail-section-light"
        }
      >
        <div className="swipe-line-container">
          <div className="swipe-line"></div>
        </div>

        <h1 className="meal-title">{mealData?.strMeal}</h1>
        <h2 className="meal-category-name">{mealData?.strCategory}</h2>
        <h3 className="meal-area-name">{mealData?.strArea}</h3>
        <Toggle />
        <Nav />
      </section>
    </section>
  );
};

export default Details;
