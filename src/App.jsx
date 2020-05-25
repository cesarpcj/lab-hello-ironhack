import React, { Component } from "react";
import logo from "./logo.svg";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
          <img src="images/ironhack-logo.svg" alt="logo" />
          <img src="images/menu-top.svg" alt="menu" />
        </div>

        <header className="App-header">
          <div id="header"></div>
        </header>
        <div id="bottom"></div>
      </div>
    );
  }
}

export default App;
