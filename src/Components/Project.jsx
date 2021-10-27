import React, { Component } from "react";

class Project extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        className="project-item-container"
        style={{
          backgroundImage: `url(../Images/project-acaai.jpeg)`,
        }}
      >
        <div className="project-content">
          <h2>{this.props.project.title}</h2>
          <h6>{this.props.project.description}</h6>
        </div>
      </div>
    );
  }
}

export default Project;
