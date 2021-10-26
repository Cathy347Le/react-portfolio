import React, { Component } from "react";
import "./Menu.scss";

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        <ul>
          <li>
            <a href="#about-section">About</a>
          </li>
          <li>
            <a href="#work-section">Work</a>
          </li>
          <li>
            <a href="">Resume</a>
          </li>
          <li>
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
