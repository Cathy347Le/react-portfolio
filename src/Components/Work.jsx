import React, { Component } from "react";
import { StickyContainer, Sticky } from "react-sticky";
import "./Work.scss";
import Menu from "./Menu";
import Project from "./Project";

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
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      </StickyContainer>
    );
  }
}

export default Work;
