import React, { Component } from "react";
import "./App.css";
import AddPattern from "./components/AddPattern";

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="topHeading">
          <h1>A Simple Pattern Making App!!!!</h1>
        </div>
        <AddPattern />
      </div>
    );
  }
}

export default App;
