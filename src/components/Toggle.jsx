import React, { useState } from "react";
import "./Toggle.css";
import Instructions from "./Instructions";
import Ingredients from "./Ingredients";

const Toggle = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const showIngredientSection = () => {
    setShowInstructions(false);
  };

  const showInstructionSection = () => {
    setShowInstructions(true);
  };

  return (
    <>
      <section className="toggle-container">
        <button
          className={`ingredient-toggle-btn ${
            !showInstructions ? "active" : ""
          }`}
          onClick={showIngredientSection}
        >
          Ingredients
        </button>
        <button
          className={`instructions-toggle-btn ${
            showInstructions ? "active" : ""
          }`}
          onClick={showInstructionSection}
        >
          Instructions
        </button>
      </section>

      {!showInstructions ? <Ingredients /> : <Instructions />}
    </>
  );
};

export default Toggle;
