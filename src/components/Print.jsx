import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThemeDetailContext } from "../context/Context";
import { usePrint } from "react-recipes";
import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import "./Print.css";
import PaperIcon from "../images/Paper.svg";

const Print = ({ onClick }) => {
  const [printData, setPrintData] = useState("recipe-informations-print-off");
  const [ingredientsItems, setIngredientsItems] = useState();
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

  const { ref, handlePrint } = usePrint();
  const showRecipeData = () => {
    setPrintData("recipe-informations-print-on");

    setTimeout(() => {
      document.body.style.overflow = "hidden";
      handlePrint();
      document.body.style.overflow = "";
      setPrintData("recipe-informations-print-off");
      onClick();
    }, 100);
  };

  const formatText = mealData?.strInstructions.split(`\r\n`);
  const absatz = formatText?.map((item, index) => (
    <div key={index} className="InstructionsAbsatz">
      <p>{item}</p> <br />
    </div>
  ));

  useEffect(() => {
    const filteredIngredients = Object.keys(mealData || {})
      .filter((key) => key.includes("Ingredient"))
      .reduce((obj, key) => {
        return Object.assign(obj, { [key]: mealData[key] });
      }, {});

    const filteredMeasurements = Object.keys(mealData || {})
      .filter((key) => key.includes("Measure"))
      .reduce((obj, key) => {
        return Object.assign(obj, { [key]: mealData[key] });
      }, {});

    const extractValuesIngredient = Object.values(filteredIngredients).filter(
      (value) => value && value.trim() !== ""
    );
    const extractValuesMeasurements = Object.values(
      filteredMeasurements
    ).filter((value) => value && value.trim() !== "");

    const concatValues = extractValuesMeasurements.map(
      (elm, index) => elm + " " + extractValuesIngredient[index] + ", "
    );

    const filteredArray = concatValues.filter((n) => n);
    setIngredientsItems(filteredArray);
  }, [mealData]);

  return (
    <>
      <button
        onClick={() => {
          showRecipeData();
        }}
        type="button"
        className="print-btn"
      >
        <img src={PaperIcon} alt="" />
        Print Recipe
      </button>
      <div ref={ref} className={printData}>
        <img className="img-print-file" src={mealData?.strMealThumb} alt="" />
        <h1>{mealData?.strMeal}</h1>
        <div className="print-information-container">
          <h2>Ingredients</h2>
          <h3> {ingredientsItems}</h3>
          <h2>Instructions</h2>
          <h3>{absatz}</h3>
        </div>
      </div>
    </>
  );
};

export default Print;
