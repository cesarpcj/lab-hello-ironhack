import React, { Component } from "react";

import "./App.css";

class Bottom extends Component {
  render() {
    return (
      <div className="bottom">
        <div className="bottom-item">
          <img src="images/icon1.png" alt="" />
          <h2>Declarative</h2>
          <p>Reacts makes it painless to create interactive UIs</p>
        </div>
        <div className="bottom-item">
          <img src="images/icon2.png" alt="" />
          <h2>Components</h2>
          <p>Build encapsulate components that manage their state</p>
        </div>
        <div className="bottom-item">
          <img src="images/icon3.png" alt="" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components</p>
        </div>
        <div className="bottom-item">
          <img src="images/icon4.png" alt="" />
          <h2>JSX</h2>
          <p>Static-typed, designed to run on modern browsers</p>
        </div>
      </div>
    );
  }
}

export default Bottom;
