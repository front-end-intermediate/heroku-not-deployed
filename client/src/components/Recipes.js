import React from "react";
import Recipe from "./Recipe";

function Recipes({ recipes }) {
  return (
    <div>
      {recipes.map(recipe => (
        <Recipe key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
}

export default Recipes;
