import React, { Component } from "react";
import "./Menu.scss";

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        <ul>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
