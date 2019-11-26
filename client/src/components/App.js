import React, { useState, useEffect } from "react";
import { Router, Link } from "@reach/router";
// import Recipe from "./Recipe";
import Recipes from "./Recipes";
import RecipeDetail from "./RecipeDetail";
import RecipeMaintenance from "./RecipeMaintenance";
import "./index.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`/api/recipes`)
      .then(response => response.json())
      .then(json => {
        setRecipes(json);
      });
  }, []);

  const addRecipe = (recipe) => {
    fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    })
      .then(res => res.json())
      .then(recipe =>
        setRecipes([
          ...recipes,
          {
            title: recipe.title,
            image: recipe.image,
            description: recipe.description,
            _id: recipe._id
          }
        ])
      )
  }

  const deleteRecipe = (recipeToDelete) => {
    fetch(`/api/recipes/${recipeToDelete._id}`, {
      method: 'DELETE'
    }).then(res => {
      setRecipes(recipes => recipes.filter(recipes => recipes._id !== recipeToDelete._id))
    })
  }

  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/maintenance'>Maintenance</Link>
      </nav>

      <h1>Recipes!</h1>
      <Router>
        <Recipes path="/" recipes={recipes} />
        <RecipeDetail path="/recipe/:recipeId" recipes={recipes} />
        <RecipeMaintenance
          path="/maintenance"
          recipes={recipes}
          deleteRecipe={deleteRecipe}
          addRecipe={addRecipe} />
      </Router>
    </div>
  );
}

export default App;
