import React from "react";
import "./index.css";

class App extends React.Component {
  state = {
    recipes: []
  };
  componentDidMount() {
    fetch(`/api/recipes`)
      .then(response => response.json())
      .then(recipes =>
        this.setState({
          recipes: recipes
        })
      );
  }
  render() {
    return <div>Hello from app</div>;
  }
}

export default App;
