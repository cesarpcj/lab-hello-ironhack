import React, { Component } from "react";

import "./App.css";

class Header extends Component {
  render() {
    return (
      <div className="">
        <header className="header">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn frontend development framework from scratch, to become a ninja developer</p>
          <button>Awesome</button>
        </header>
      </div>
    );
  }
}

export default Header;
