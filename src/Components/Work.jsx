import React, { Component } from "react";
import "./Work.scss";
import Menu from "./Menu";

class Work extends Component {
  render() {
    return (
      <div className="work-section clearfix" id="work-section">
        <div className="bckgrd-white title-section">
          <div className="title-container">
            <h1>Work</h1>
          </div>
          <Menu />
        </div>
        <div className="projects-section">
          <div
            className="project-item-container project-1"
            style={{
              backgroundImage: `url(/static/media/project-gmmb.3e577fe9.jpeg)`,
            }}
          >
            <div className="project-content">
              <h2>GMMB</h2>
              <h6>
                Interactive and creative website using parallax, animations, and
                hover effects
              </h6>
            </div>
          </div>
          <div
            className="project-item-container project-2"
            style={{
              backgroundImage: `url(/static/media/project-acaai.fa048b77.jpeg)`,
            }}
          >
            <div className="project-content">
              <h2>American College of Allergy, Asthma, & Immunology</h2>
              <h6>
                Interactive and creative website using parallax, animations, and
                hover effects
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
