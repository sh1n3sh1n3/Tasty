import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Ingredients.css";
import { ThemeDetailContext } from "../context/Context";

const Ingredients = () => {
  const [ingredientsData, setIngredientsData] = useState([]);
  const [ingredientsItems, setIngredientsItems] = useState([]);
  const params = useParams();
  const idDish = params.id;
  const { themeDetailPage, setThemeDetailPage } =
    useContext(ThemeDetailContext);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idDish}`)
      .then((res) => res.json())
      .then((data) => {
        setIngredientsData(data.meals[0]);
      })
      .catch((error) => {
        console.error("Fehler beim Fetch", error);
      });
  }, []);

  useEffect(() => {
    const filteredIngredients = Object.keys(ingredientsData)
      .filter((key) => key.includes("Ingredient"))
      .reduce((obj, key) => {
        return Object.assign(obj, { [key]: ingredientsData[key] });
      }, {});

    const filteredMeasurements = Object.keys(ingredientsData)
      .filter((key) => key.includes("Measure"))
      .reduce((obj, key) => {
        return Object.assign(obj, { [key]: ingredientsData[key] });
      }, {});

    const extractValuesIngredient = Object.values(filteredIngredients).filter(
      (value) => value && value.trim() !== ""
    );
    const extractValuesMeasurements = Object.values(
      filteredMeasurements
    ).filter((value) => value && value.trim() !== "");

    const concatValues = extractValuesMeasurements.map(
      (elm, index) => elm + " " + extractValuesIngredient[index]
    );

    const filteredArray = concatValues.filter((n) => n);
    setIngredientsItems(filteredArray);
  }, [ingredientsData]);

  return (
    <div
      className={
        themeDetailPage
          ? "ingredients-wrapper-dark"
          : "ingredients-wrapper-light"
      }
    >
      <h3 className="ingredients">Ingredients</h3>
      <section className="ingredients-container">
        {ingredientsItems.map((elm, index) => (
          <div className="ingredients-item" key={index}>
            <p className="ingredients-name">{elm}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Ingredients;
