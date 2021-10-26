import React, { Component } from "react";
import { StickyContainer, Sticky } from "react-sticky";
import "./Work.scss";
import Menu from "./Menu";

class Work extends Component {
  render() {
    return (
      <StickyContainer>
        <div className="work-section clearfix" id="work-section">
          <Sticky disableCompensation>
            {({ style }) => (
              <div style={style} className="bckgrd-white title-section">
                <div className="title-container">
                  <h1>Work</h1>
                </div>
                <Menu />
              </div>
            )}
          </Sticky>
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
                  Interactive and creative website using parallax, animations,
                  and hover effects
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
                  Interactive and creative website using parallax, animations,
                  and hover effects
                </h6>
              </div>
            </div>
            <div
              className="project-item-container project-3"
              style={{
                backgroundImage: `url(/static/media/project-kuni.6b0fabe3.jpg)`,
              }}
            >
              <div className="project-content">
                <h2>Kuni Foundation</h2>
                <h6>Wordpress website built with accessibility in mind</h6>
              </div>
            </div>
          </div>
        </div>
      </StickyContainer>
    );
  }
}

export default Work;
