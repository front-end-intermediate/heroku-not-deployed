import React, { useRef } from 'react';

function RecipeMaintenance(props) {
  const nameRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();

  const createRecipe = e => {
    e.preventDefault();
    const recipe = {
      title: nameRef.current.value,
      image: imageRef.current.value,
      description: descriptionRef.current.value
    };
    props.addRecipe(recipe);
  };

  return (
    <div>
      <h3>Add Recipe Form</h3>
      <form onSubmit={e => createRecipe(e)}>
        <input
          type='text'
          name='name'
          placeholder='Recipe name'
          ref={nameRef}
        />
        <input
          type='text'
          name='image'
          placeholder='Recipe image'
          ref={imageRef}
        />
        <textarea
          type='text'
          name='description'
          placeholder='Recipe description'
          ref={descriptionRef}
        />
        <button type='submit'>Add Recipe</button>
      </form>

      <ListRecipes recipes={props.recipes} deleteRecipe={props.deleteRecipe} />
    </div>
  );
}

function ListRecipes(props) {
  return (
    <ul>
      {props.recipes.map(recipe => (
        <li key={recipe._id}>
          {recipe.title}
          <button onClick={() => props.deleteRecipe(recipe)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default RecipeMaintenance;
