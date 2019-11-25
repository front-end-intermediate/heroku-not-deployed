import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
// import Recipe from "./Recipe";
import Recipes from './Recipes';
import RecipeDetail from './RecipeDetail';
import RecipeMaintenance from './RecipeMaintenance';
import './index.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`/api/recipes`)
      .then(response => response.json())
      .then(json => {
        setRecipes(json);
      });
  }, []);

  // const addRecipe = ({ name, image, description }) => {
  //   setRecipes([
  //     ...recipes,
  //     {
  //       name: name,
  //       image: image,
  //       description: description
  //     }
  //   ]);
  // };

  return (
    <div>
      <h1>Recipes!</h1>
      <Router>
        <Recipes path='/' recipes={recipes} />
        {/* <RecipeDetail path='/recipe/:recipeId' />
        <RecipeMaintenance path='/maintenance' /> */}
      </Router>
    </div>
  );
}

export default App;
