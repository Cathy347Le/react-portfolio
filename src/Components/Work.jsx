import React, { Component } from "react";
import "./Work.scss";
import Menu from "./Menu";

class Work extends Component {
  render() {
    return (
      <div className="work-section" id="work-section">
        <div className="col-xs-12 col-sm-6 bckgrd-white title-section">
          <div className="title-container">
            <h1>Work</h1>
          </div>
          <Menu />
        </div>
        <div className="col-xs-12 col-sm-6 projects-section">
          <div className="project-item-container">
            <h2>GMMB</h2>
            <h6>
              Interactive and creative website using parallax, animations, and
              hover effects
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
