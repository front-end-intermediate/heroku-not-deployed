import React from "react";
import { Link } from "@reach/router";

function Recipe(props) {
  const { _id, title, description, image } = props.recipe;

  return (
    <>
      <img
        src={`http://oit2.scps.nyu.edu/~devereld/intermediate/img/${image}`}
        alt={props.recipe.name}
      />
      <h3>
        <Link to={`/recipe/${_id}`}>{title}</Link>
      </h3>
      <p>{description}</p>
    </>
  );
}

export default Recipe;
