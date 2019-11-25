import React, { useRef } from 'react';

function RecipeMaintenance(props) {
  const nameRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();

  const createRecipe = e => {
    e.preventDefault();
    const recipe = {
      name: nameRef.current.value,
      image: imageRef.current.value,
      description: descriptionRef.current.value
    };
    // this.props.addRecipe(recipe);
    console.log(recipe);
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
    </div>
  );
}

export default RecipeMaintenance;
