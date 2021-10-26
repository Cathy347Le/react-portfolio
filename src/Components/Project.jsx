import React, { Component } from "react";
import Menu from "./Menu";

class Project extends Component {
  render() {
    return (
      <div
        className="project-item-container"
        style={{
          backgroundImage: `url(/static/media/project-kuni.6b0fabe3.jpg)`,
        }}
      >
        <div className="project-content">
          <h2>Kuni Foundation</h2>
          <h6>Wordpress website built with accessibility in mind</h6>
        </div>
      </div>
    );
  }
}

export default Project;
