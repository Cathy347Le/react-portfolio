import React, { Component } from "react";
import "./About.scss";
import Menu from "./Menu";

class About extends Component {
  render() {
    return (
      <div className="about-section" id="about-section">
        <div className="col-xs-12 col-sm-6 bckgrd-black title-section">
          <div className="title-container">
            <h1>About</h1>
          </div>
          <Menu />
        </div>
        <div className="col-xs-12 col-sm-6 bckgrd-white">
          <h3>About Content</h3>
          <p>
            I’m always open to discussing new projects, creative ideas or
            opportunities to be a part of your team. Feel free to email me.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
