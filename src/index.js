import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
// render method comes from the react Dom package. it takes two arguments: 1. a areact component to render (typically we'll render our top
// level App component here), 2. A dom element where we want that component to be rendered (by convection, a div with the ID of root)
// this fucntion s hwow the rest of the of our application will make onto the DOM.