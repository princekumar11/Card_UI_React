import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <>
      <Home />
    </>
  }
}

export default App