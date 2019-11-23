import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

function RecipeDetail(props) {
  const recipeId = props.recipeId;
  const currRecipe = props.recipes.filter(recipe => recipe._id === recipeId);
  console.log(currRecipe[0]);

  return (
    <>
      {currRecipe.map(item => (
        <div key={item._id}>
          <img
            src={`http://oit2.scps.nyu.edu/~devereld/intermediate/img/${item.image}`}
            alt={item.title}
          />
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <h3>Ingredients</h3>
          <ul>
            {item.ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <h3>Preparation</h3>
          <ul>
            {item.preparation.map(prep => (
              <li key={prep.step}>{prep.step}</li>
            ))}
          </ul>
          <Link to="/">Home</Link>
        </div>
      ))}
    </>
  );
}

export default RecipeDetail;
