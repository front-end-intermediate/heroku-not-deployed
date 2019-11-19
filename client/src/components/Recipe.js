import React from "react";
import { Link } from "@reach/router";

class Recipe extends React.Component {
  render() {
    const {
      _id,
      title,
      description,
      image,
      ingredients,
      preparation
    } = this.props.recipe;
    return (
      <>
        <img
          src={`http://oit2.scps.nyu.edu/~devereld/intermediate/img/${image}`}
          alt={this.props.recipe.name}
        />
        <h3>
          <Link to={`/recipe/${_id}`}>{title}</Link>
        </h3>
        <p>{description}</p>
      </>
    );
  }
}

export default Recipe;
