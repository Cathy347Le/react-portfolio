import React, { Component } from "react";
import "./Menu.scss";

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Work</a>
          </li>
          <li>
            <a href="">Resume</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
