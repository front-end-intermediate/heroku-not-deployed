import React from "react";

class RecipeDetail extends React.Component {
  render() {
    const { recipeId } = this.props;
    return (
      <div>
        <h1>{recipeId}</h1>
      </div>
    );
  }
}

export default RecipeDetail;
