import React, { Component } from "react";
import "./Work.scss";
import Menu from "./Menu";

class Work extends Component {
  render() {
    return (
      <div className="work-section" id="work-section">
        <div className="col-xs-12 col-sm-6 bckgrd-white section-title">
          <div className="title-container">
            <h1>Work</h1>
          </div>
          <Menu />
        </div>
        <div className="col-xs-12 col-sm-6 bckgrd-white">
          <h3>Work Content</h3>
          <p>
            I’m always open to discussing new projects, creative ideas or
            opportunities to be a part of your team. Feel free to email me.
          </p>
        </div>
      </div>
    );
  }
}

export default Work;
